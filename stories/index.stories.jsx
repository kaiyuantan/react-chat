import React from 'react';

import { storiesOf } from '@storybook/react';

import InstructionsPage from './overview/instructions.stories.jsx';
import IntroductionPage from './overview/introduction.stories.jsx';

import ChatListPage from './anatomy/chatlist.stories.jsx';
import ChatRoomPage from './anatomy/chatroom.stories.jsx';

import AvatarPage from './anatomy/avatar.stories.jsx';
import ImagePage from './anatomy/image.stories.jsx';

import LayoutPage from './examples/layout.stories.jsx';
import SizingPage from './examples/sizing.stories.jsx';
import ThemingPage from './examples/theming.stories.jsx';

import './index.css';

storiesOf('Overview', module)
  .add('Introduction', () => <IntroductionPage />)
  .add('How To Use', () => <InstructionsPage />);

storiesOf('Anatomy', module)
  .add('Chat List', () => <ChatListPage />)
  .add('Chat Room', () => <ChatRoomPage />)
  .add('Avatar', () => <AvatarPage />)
  .add('Image', () => <ImagePage />);

storiesOf('Examples', module)
  .add('Sizing', () => <SizingPage />)
  .add('Layout', () => <LayoutPage />)
  .add('Theming', () => <ThemingPage />);