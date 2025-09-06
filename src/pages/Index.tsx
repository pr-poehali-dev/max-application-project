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

  const sidebarSections = [
    { id: 'chats', name: 'Чаты', icon: 'MessageCircle' },
    { id: 'contacts', name: 'Контакты', icon: 'Users' },
    { id: 'channels', name: 'Каналы', icon: 'Radio' },
    { id: 'calls', name: 'Звонки', icon: 'Phone' },
    { id: 'profile', name: 'Профиль', icon: 'User' },
    { id: 'settings', name: 'Настройки', icon: 'Settings' },
  ];

  return (
    <div className="h-screen flex bg-telegram-white">
      {/* Sidebar */}
      <div className="w-16 bg-telegram-blue flex flex-col items-center py-4 space-y-4">
        <div className="text-white text-xl font-bold mb-4">MAX</div>
        {sidebarSections.map((section) => (
          <Button
            key={section.id}
            variant="ghost"
            size="icon"
            className={`w-10 h-10 text-white hover:bg-white/20 ${
              activeSection === section.id ? 'bg-white/20' : ''
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            <Icon name={section.icon} size={20} />
          </Button>
        ))}
      </div>

      {/* Left Panel */}
      <div className="w-80 bg-telegram-light border-r border-gray-200">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold text-telegram-dark">
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
                  <Button size="icon" variant="outline" className="h-8 w-8">
                    <Icon name="Plus" size={16} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Создать групповой чат</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input placeholder="Название группы" />
                    <div className="text-sm text-gray-600">
                      Поддержка до <span className="font-semibold text-telegram-blue">200,000 участников</span>
                    </div>
                    <Button className="w-full bg-telegram-blue hover:bg-telegram-blue/90">
                      Создать группу
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
          <Input
            placeholder={`Поиск ${activeSection === 'chats' ? 'чатов' : activeSection === 'contacts' ? 'контактов' : 'каналов'}`}
            className="w-full"
          />
        </div>

        {/* Content */}
        <ScrollArea className="h-[calc(100vh-140px)]">
          {activeSection === 'chats' && (
            <div className="p-2">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  className={`p-3 rounded-lg cursor-pointer mb-1 transition-colors ${
                    activeChat === chat.id ? 'bg-telegram-blue/10' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveChat(chat.id)}
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-telegram-blue text-white">
                        {chat.type === 'group' ? <Icon name="Users" size={16} /> : chat.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-telegram-dark truncate">{chat.name}</h3>
                        <span className="text-xs text-gray-500">{chat.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                        <div className="flex items-center space-x-2">
                          {chat.members && chat.type === 'group' && (
                            <Badge variant="secondary" className="text-xs">
                              {chat.members}
                            </Badge>
                          )}
                          {chat.unread > 0 && (
                            <Badge className="bg-telegram-blue text-white text-xs">
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
              {contacts.map((contact) => (
                <div key={contact.id} className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer mb-1">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-telegram-blue text-white">
                        {contact.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-medium text-telegram-dark">{contact.name}</h3>
                      <p className="text-sm text-gray-600">{contact.phone}</p>
                      <p className="text-xs text-gray-500">{contact.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'channels' && (
            <div className="p-2">
              {channels.map((channel) => (
                <div key={channel.id} className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer mb-1">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-telegram-blue text-white">
                        <Icon name="Radio" size={16} />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-medium text-telegram-dark">{channel.name}</h3>
                      <p className="text-sm text-gray-600">{channel.description}</p>
                      <p className="text-xs text-gray-500">{channel.members.toLocaleString()} участников</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'profile' && (
            <div className="p-4">
              <div className="text-center mb-6">
                <Avatar className="h-20 w-20 mx-auto mb-4">
                  <AvatarFallback className="bg-telegram-blue text-white text-2xl">
                    И
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold text-telegram-dark">Иван Петров</h2>
                <p className="text-gray-600">@ivan_petrov</p>
                <p className="text-gray-500 text-sm">+7 (999) 123-45-67</p>
              </div>
              <Button className="w-full mb-4 bg-telegram-blue hover:bg-telegram-blue/90">
                <Icon name="Edit" size={16} className="mr-2" />
                Редактировать профиль
              </Button>
            </div>
          )}

          {activeSection === 'settings' && (
            <div className="p-2">
              <div className="space-y-2">
                <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="Bell" size={20} className="text-telegram-blue" />
                    <span className="text-telegram-dark">Уведомления</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="Shield" size={20} className="text-telegram-blue" />
                    <span className="text-telegram-dark">Приватность</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="Palette" size={20} className="text-telegram-blue" />
                    <span className="text-telegram-dark">Тема</span>
                  </div>
                </div>
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
            <div className="p-4 bg-white border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-telegram-blue text-white">
                      <Icon name="Users" size={16} />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-semibold text-telegram-dark">Семейный чат</h2>
                    <p className="text-sm text-gray-600">5 участников, 3 онлайн</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Icon name="Phone" size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Icon name="Video" size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Icon name="MoreVertical" size={20} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        message.isOwn
                          ? 'bg-telegram-blue text-white'
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      {!message.isOwn && (
                        <p className="text-xs font-medium text-telegram-blue mb-1">
                          {message.sender}
                        </p>
                      )}
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.isOwn ? 'text-white/70' : 'text-gray-500'}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon">
                  <Icon name="Paperclip" size={20} />
                </Button>
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Написать сообщение..."
                  className="flex-1"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      setNewMessage('');
                    }
                  }}
                />
                <Button className="bg-telegram-blue hover:bg-telegram-blue/90">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </>
        )}

        {activeSection !== 'chats' && (
          <div className="flex-1 flex items-center justify-center bg-telegram-light/50">
            <div className="text-center">
              <Icon name="MessageCircle" size={64} className="text-gray-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {activeSection === 'contacts' && 'Выберите контакт'}
                {activeSection === 'channels' && 'Выберите канал'}
                {activeSection === 'calls' && 'Звонки'}
                {activeSection === 'profile' && 'Ваш профиль'}
                {activeSection === 'settings' && 'Настройки приложения'}
              </h3>
              <p className="text-gray-500">
                {activeSection === 'calls' && 'Здесь будут отображаться ваши звонки'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;