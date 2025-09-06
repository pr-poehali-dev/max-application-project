import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeChat, setActiveChat] = useState<string>('1');
  const [activeSection, setActiveSection] = useState<string>('chats');
  const [newMessage, setNewMessage] = useState<string>('');
  const [isInCall, setIsInCall] = useState<boolean>(false);
  const [callType, setCallType] = useState<'voice' | 'video'>('voice');

  const chats = [
    { id: '1', name: 'Семейный чат', lastMessage: 'Привет всем!', time: '14:30', unread: 3, type: 'group', members: 5 },
    { id: '2', name: 'Рабочая группа', lastMessage: 'Встреча в 15:00', time: '13:45', unread: 0, type: 'group', members: 25 },
    { id: '3', name: 'Анна Смирнова', lastMessage: 'Как дела?', time: '12:20', unread: 1, type: 'private' },
    { id: '4', name: 'Технологии будущего', lastMessage: 'Новости ИИ', time: '11:15', unread: 0, type: 'channel', members: 15430 },
  ];

  const messages = [
    { id: '1', sender: 'Мама', content: 'Привет всем! Как дела?', time: '14:20', isOwn: false },
    { id: '2', sender: 'Я', content: 'Всё отлично! А у тебя как?', time: '14:25', isOwn: true },
    { id: '3', sender: 'Папа', content: 'Тоже всё хорошо 👍', time: '14:28', isOwn: false },
    { id: '4', sender: 'Мама', content: 'Отлично! Увидимся вечером', time: '14:30', isOwn: false },
  ];

  const contacts = [
    { id: '1', name: 'Анна Смирнова', phone: '+7 (999) 123-45-67', status: 'онлайн' },
    { id: '2', name: 'Сергей Петров', phone: '+7 (999) 234-56-78', status: '5 мин. назад' },
    { id: '3', name: 'Мария Козлова', phone: '+7 (999) 345-67-89', status: 'вчера' },
  ];

  const channels = [
    { id: '1', name: 'Технологии будущего', members: 15430, description: 'Новости технологий и ИИ' },
    { id: '2', name: 'Космос и астрономия', members: 8920, description: 'Все о космосе и звездах' },
    { id: '3', name: 'Программирование', members: 23840, description: 'Обсуждение кода и разработки' },
  ];

  const recentCalls = [
    { id: '1', name: 'Анна Смирнова', type: 'video', duration: '15:23', time: '2 часа назад', status: 'answered' },
    { id: '2', name: 'Семейный чат', type: 'voice', duration: '45:12', time: '5 часов назад', status: 'answered' },
    { id: '3', name: 'Сергей Петров', type: 'voice', duration: '0:00', time: 'вчера', status: 'missed' },
  ];

  const sidebarSections = [
    { id: 'chats', name: 'Чаты', icon: 'MessageCircle' },
    { id: 'contacts', name: 'Контакты', icon: 'Users' },
    { id: 'channels', name: 'Каналы', icon: 'Radio' },
    { id: 'calls', name: 'Звонки', icon: 'Phone' },
    { id: 'profile', name: 'Профиль', icon: 'User' },
    { id: 'settings', name: 'Настройки', icon: 'Settings' },
  ];

  const startCall = (type: 'voice' | 'video') => {
    setCallType(type);
    setIsInCall(true);
  };

  const endCall = () => {
    setIsInCall(false);
  };

  return (
    <div className="h-screen flex bg-telegram-white">
      {/* Call Overlay */}
      {isInCall && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in">
          <div className="text-center text-white animate-bounce-in">
            <div className="relative mb-8">
              <Avatar className="h-32 w-32 mx-auto animate-glow">
                <AvatarFallback className="bg-gradient-to-br from-gradient-purple to-gradient-pink text-white text-4xl">
                  А
                </AvatarFallback>
              </Avatar>
              <div className="absolute -top-2 -right-2 animate-pulse">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name={callType === 'video' ? 'Video' : 'Phone'} size={16} />
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Анна Смирнова</h2>
            <p className="text-lg text-gray-300 mb-8">
              {callType === 'video' ? 'Видеозвонок...' : 'Голосовой вызов...'}
            </p>
            <p className="text-sm text-green-400 mb-8 animate-pulse">
              🔒 Защищённая P2P связь • Без VPN • HD качество
            </p>
            <div className="flex space-x-6 justify-center">
              <Button
                size="lg"
                className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 animate-pulse"
                onClick={endCall}
              >
                <Icon name="PhoneOff" size={24} />
              </Button>
              {callType === 'video' && (
                <>
                  <Button
                    size="lg"
                    className="w-16 h-16 rounded-full bg-telegram-light hover:bg-telegram-gray"
                  >
                    <Icon name="Mic" size={24} />
                  </Button>
                  <Button
                    size="lg"
                    className="w-16 h-16 rounded-full bg-telegram-light hover:bg-telegram-gray"
                  >
                    <Icon name="Camera" size={24} />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div className="w-16 bg-gradient-to-b from-telegram-dark to-telegram-darker flex flex-col items-center py-4 space-y-4 animate-slide-in">
        <div className="text-telegram-text text-xl font-bold mb-4 animate-glow">MAX</div>
        {sidebarSections.map((section, index) => (
          <Button
            key={section.id}
            variant="ghost"
            size="icon"
            className={`w-10 h-10 text-telegram-text hover:bg-white/10 transition-all duration-300 ${
              activeSection === section.id ? 'bg-gradient-to-r from-gradient-purple to-gradient-pink animate-glow' : ''
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => setActiveSection(section.id)}
          >
            <Icon name={section.icon} size={20} />
          </Button>
        ))}
      </div>

      {/* Left Panel */}
      <div className="w-80 bg-telegram-light border-r border-telegram-gray animate-fade-in">
        {/* Header */}
        <div className="p-4 border-b border-telegram-gray bg-telegram-dark">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold text-telegram-text">
              {activeSection === 'chats' && 'Чаты'}
              {activeSection === 'contacts' && 'Контакты'}
              {activeSection === 'channels' && 'Каналы'}
              {activeSection === 'calls' && 'Звонки'}
              {activeSection === 'profile' && 'Профиль'}
              {activeSection === 'settings' && 'Настройки'}
            </h1>
            {activeSection === 'chats' && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="icon" variant="outline" className="h-8 w-8 bg-gradient-to-r from-gradient-blue to-gradient-green hover:from-gradient-green hover:to-gradient-blue transition-all duration-500 border-none animate-pulse">
                    <Icon name="Plus" size={16} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-telegram-dark border-telegram-gray">
                  <DialogHeader>
                    <DialogTitle className="text-telegram-text">Создать групповой чат</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input placeholder="Название группы" className="bg-telegram-light border-telegram-gray text-telegram-text" />
                    <div className="text-sm text-telegram-gray">
                      Поддержка до <span className="font-semibold bg-gradient-to-r from-gradient-purple to-gradient-pink bg-clip-text text-transparent">200,000 участников</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-gradient-purple to-gradient-pink hover:from-gradient-pink hover:to-gradient-purple transition-all duration-500 animate-glow">
                      Создать группу
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
          <Input
            placeholder={`Поиск ${activeSection === 'chats' ? 'чатов' : activeSection === 'contacts' ? 'контактов' : 'каналов'}`}
            className="w-full bg-telegram-darker border-telegram-gray text-telegram-text placeholder-telegram-gray"
          />
        </div>

        {/* Content */}
        <ScrollArea className="h-[calc(100vh-140px)]">
          {activeSection === 'chats' && (
            <div className="p-2">
              {chats.map((chat, index) => (
                <div
                  key={chat.id}
                  className={`p-3 rounded-lg cursor-pointer mb-1 transition-all duration-300 animate-fade-in ${
                    activeChat === chat.id ? 'bg-gradient-to-r from-gradient-purple/20 to-gradient-pink/20 animate-glow' : 'hover:bg-telegram-gray/20'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setActiveChat(chat.id)}
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gradient-to-br from-gradient-blue to-gradient-green text-white">
                        {chat.type === 'group' ? <Icon name="Users" size={16} /> : chat.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-telegram-text truncate">{chat.name}</h3>
                        <span className="text-xs text-telegram-gray">{chat.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-telegram-gray truncate">{chat.lastMessage}</p>
                        <div className="flex items-center space-x-2">
                          {chat.members && chat.type === 'group' && (
                            <Badge variant="secondary" className="text-xs bg-telegram-gray text-telegram-text">
                              {chat.members}
                            </Badge>
                          )}
                          {chat.unread > 0 && (
                            <Badge className="bg-gradient-to-r from-gradient-orange to-gradient-red text-white text-xs animate-pulse">
                              {chat.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'contacts' && (
            <div className="p-2">
              {contacts.map((contact, index) => (
                <div 
                  key={contact.id} 
                  className="p-3 rounded-lg hover:bg-telegram-gray/20 cursor-pointer mb-1 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gradient-to-br from-gradient-pink to-gradient-purple text-white">
                        {contact.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-medium text-telegram-text">{contact.name}</h3>
                      <p className="text-sm text-telegram-gray">{contact.phone}</p>
                      <p className="text-xs text-telegram-gray">{contact.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'channels' && (
            <div className="p-2">
              {channels.map((channel, index) => (
                <div 
                  key={channel.id} 
                  className="p-3 rounded-lg hover:bg-telegram-gray/20 cursor-pointer mb-1 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gradient-to-br from-gradient-green to-gradient-blue text-white">
                        <Icon name="Radio" size={16} />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-medium text-telegram-text">{channel.name}</h3>
                      <p className="text-sm text-telegram-gray">{channel.description}</p>
                      <p className="text-xs text-telegram-gray">{channel.members.toLocaleString()} участников</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'calls' && (
            <div className="p-2">
              {recentCalls.map((call, index) => (
                <div 
                  key={call.id}
                  className="p-3 rounded-lg hover:bg-telegram-gray/20 cursor-pointer mb-1 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className={`text-white ${
                        call.status === 'missed' ? 'bg-gradient-to-br from-gradient-red to-gradient-orange' : 'bg-gradient-to-br from-gradient-green to-gradient-blue'
                      }`}>
                        <Icon name={call.type === 'video' ? 'Video' : 'Phone'} size={16} />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-medium text-telegram-text">{call.name}</h3>
                      <p className="text-sm text-telegram-gray">
                        {call.status === 'missed' ? 'Пропущенный' : `Длительность: ${call.duration}`}
                      </p>
                      <p className="text-xs text-telegram-gray">{call.time}</p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-gradient-green to-gradient-blue hover:from-gradient-blue hover:to-gradient-green"
                      onClick={() => startCall(call.type as 'voice' | 'video')}
                    >
                      <Icon name={call.type === 'video' ? 'Video' : 'Phone'} size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'profile' && (
            <div className="p-4 animate-fade-in">
              <div className="text-center mb-6">
                <Avatar className="h-20 w-20 mx-auto mb-4 animate-glow">
                  <AvatarFallback className="bg-gradient-to-br from-gradient-purple to-gradient-pink text-white text-2xl">
                    И
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold text-telegram-text">Иван Петров</h2>
                <p className="text-telegram-gray">@ivan_petrov</p>
                <p className="text-telegram-gray text-sm">+7 (999) 123-45-67</p>
              </div>
              <Button className="w-full mb-4 bg-gradient-to-r from-gradient-purple to-gradient-pink hover:from-gradient-pink hover:to-gradient-purple transition-all duration-500">
                <Icon name="Edit" size={16} className="mr-2" />
                Редактировать профиль
              </Button>
            </div>
          )}

          {activeSection === 'settings' && (
            <div className="p-2">
              <div className="space-y-2">
                {[
                  { icon: 'Bell', label: 'Уведомления', gradient: 'from-gradient-blue to-gradient-green' },
                  { icon: 'Shield', label: 'Приватность', gradient: 'from-gradient-purple to-gradient-pink' },
                  { icon: 'Palette', label: 'Тема', gradient: 'from-gradient-orange to-gradient-red' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-lg hover:bg-telegram-gray/20 cursor-pointer transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full bg-gradient-to-r ${item.gradient}`}>
                        <Icon name={item.icon} size={20} className="text-white" />
                      </div>
                      <span className="text-telegram-text">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {activeSection === 'chats' && activeChat && (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-telegram-dark border-b border-telegram-gray animate-fade-in">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10 animate-glow">
                    <AvatarFallback className="bg-gradient-to-br from-gradient-blue to-gradient-green text-white">
                      <Icon name="Users" size={16} />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-semibold text-telegram-text">Семейный чат</h2>
                    <p className="text-sm text-telegram-gray">5 участников, 3 онлайн</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-telegram-text hover:bg-gradient-to-r hover:from-gradient-green hover:to-gradient-blue hover:text-white transition-all duration-300"
                    onClick={() => startCall('voice')}
                  >
                    <Icon name="Phone" size={20} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-telegram-text hover:bg-gradient-to-r hover:from-gradient-purple hover:to-gradient-pink hover:text-white transition-all duration-300"
                    onClick={() => startCall('video')}
                  >
                    <Icon name="Video" size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-telegram-text hover:bg-telegram-gray/20">
                    <Icon name="MoreVertical" size={20} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4 bg-telegram-darker">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={message.id}
                    className={`flex animate-fade-in ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl transition-all duration-300 hover:scale-105 ${
                        message.isOwn
                          ? 'bg-gradient-to-r from-gradient-purple to-gradient-pink text-white'
                          : 'bg-telegram-dark border border-telegram-gray text-telegram-text'
                      }`}
                    >
                      {!message.isOwn && (
                        <p className="text-xs font-medium bg-gradient-to-r from-gradient-blue to-gradient-green bg-clip-text text-transparent mb-1">
                          {message.sender}
                        </p>
                      )}
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.isOwn ? 'text-white/70' : 'text-telegram-gray'}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 bg-telegram-dark border-t border-telegram-gray animate-fade-in">
              <div className="flex space-x-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-telegram-text hover:bg-gradient-to-r hover:from-gradient-orange hover:to-gradient-red hover:text-white transition-all duration-300"
                >
                  <Icon name="Paperclip" size={20} />
                </Button>
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Написать сообщение..."
                  className="flex-1 bg-telegram-light border-telegram-gray text-telegram-text placeholder-telegram-gray"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      setNewMessage('');
                    }
                  }}
                />
                <Button className="bg-gradient-to-r from-gradient-purple to-gradient-pink hover:from-gradient-pink hover:to-gradient-purple transition-all duration-500 animate-glow">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </>
        )}

        {activeSection !== 'chats' && (
          <div className="flex-1 flex items-center justify-center bg-telegram-darker">
            <div className="text-center animate-bounce-in">
              <div className="mb-4 animate-pulse">
                <Icon name="MessageCircle" size={64} className="text-telegram-gray mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-telegram-text mb-2">
                {activeSection === 'contacts' && 'Выберите контакт'}
                {activeSection === 'channels' && 'Выберите канал'}
                {activeSection === 'calls' && 'Звонки MAX'}
                {activeSection === 'profile' && 'Ваш профиль'}
                {activeSection === 'settings' && 'Настройки приложения'}
              </h3>
              <p className="text-telegram-gray">
                {activeSection === 'calls' && (
                  <>
                    <span className="block mb-2">🔒 P2P шифрование • HD качество • Без VPN</span>
                    <span className="text-sm bg-gradient-to-r from-gradient-green to-gradient-blue bg-clip-text text-transparent">
                      Прямое соединение через защищённые каналы
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;