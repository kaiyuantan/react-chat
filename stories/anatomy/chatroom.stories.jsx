import React from 'react';

import { action } from '@storybook/addon-actions';

import { throttle } from '../utils/helper.js';
import ChatRoom from '../../src/components/ChatRoom/ChatRoom.jsx';

const attachOptionsStub = [
  {
    action: action('Audio Clicked'),
    label: 'audio',
    type: 'audio'
  },
  {
    action: action('File Clicked'),
    label: 'file',
    type: 'file'
  },
  {
    action: action('GIF Clicked'),
    label: 'gif',
    type: 'gif'
  },
  {
    action: action('Image Clicked'),
    label: 'image',
    type: 'image'
  },
  {
    action: action('Link Clicked'),
    label: 'link',
    type: 'link'
  },
  {
    action: action('Location Clicked'),
    label: 'location',
    type: 'location'
  },
  {
    action: action('Markdown Clicked'),
    label: 'markdown',
    type: 'markdown'
  },
  {
    action: action('PDF Clicked'),
    label: 'pdf',
    type: 'pdf'
  },
  {
    action: action('Video Clicked'),
    label: 'video',
    type: 'video'
  }
];

const menuActionsStub = [
  {
    action: action('Copy Clicked'),
    label: 'Copy',
    type: 'copy'
  },
  {
    action: action('Delete Clicked'),
    label: 'Delete',
    type: 'delete'
  },
  {
    action: action('Forward Clicked'),
    label: 'Forward',
    type: 'forward'
  },
  {
    action: action('Info Clicked'),
    label: 'Info',
    type: 'info'
  },
  {
    action: action('Pin Clicked'),
    label: 'Pin',
    type: 'pin'
  },
  {
    action: action('Reply Clicked'),
    label: 'Reply',
    type: 'reply'
  }
];

const messagesStub = [
  {
    messageId: '000',
    text: 'Nick Fury created \'Avengers Assemble\'. \n This is the beginning of the conversation.',
    timeStamp: '2018-09-23T12:55:21Z',
    type: 'system'
  },
  {
    isDelivered: true,
    isRead: true,
    messageId: '001',
    senderId: '6',
    text: 'Okay y\'all own time own target carry on ah!',
    timeStamp: '2018-09-23T12:56:06Z',
    type: 'text'
  },
  {
    isDelivered: true,
    messageId: '002',
    senderId: '1',
    text: 'Don\'t waste time liao. Anyone in for prata?',
    timeStamp: '2018-09-23T12:56:43Z',
    type: 'text'
  },
  {
    isDelivered: true,
    messageId: '003',
    senderId: '2',
    text: 'I free 6pm. Ai mai?',
    timeStamp: '2018-09-23T13:03:28Z',
    type: 'text'
  },
  {
    isDelivered: true,
    messageId: '004',
    senderId: '2',
    text: 'Wait maybe 7pm leh...',
    timeStamp: '2018-09-23T13:03:47Z',
    type: 'text'
  },
  {
    isDelivered: true,
    messageId: '005',
    senderId: '3',
    text: 'Eh I coming in from Tuas.',
    timeStamp: '2018-09-23T13:11:57Z',
    type: 'text'
  },
  {
    isDelivered: true,
    messageId: '006',
    senderId: '3',
    text: 'Might late and scared MRT breakdown =/',
    timeStamp: '2018-09-23T13:12:20Z',
    type: 'text'
  },
  {
    messageId: '007',
    senderId: '3',
    text: 'Maybe will join arnd 8 lor.',
    timeStamp: '2018-09-23T13:13:04Z',
    type: 'text'
  },
];

const usersStub = {
  '1': {
    id: '1',
    name: 'Tony Stark',
    avatar: 'https://vignette.wikia.nocookie.net/marvelmovies/images/8/87/AoU_Tony_Stark_portal.png/revision/latest?cb=20150427084736'
  },
  '2': {
    id: '2',
    name: 'Steve Rogers',
    avatar: 'https://pbs.twimg.com/profile_images/653610207675875329/RawYE4cD_400x400.jpg'
  },
  '3': {
    id: '3',
    name: 'Thor',
    avatar: 'https://66.media.tumblr.com/4574a8f843cb0061bfbb3d875a0abfb5/tumblr_oyakwsJopd1tctq75o1_r2_540.png'
  },
  '4': {
    id: '4',
    name: 'Natasha Romanoff',
    avatar: 'https://i.pinimg.com/originals/73/c8/89/73c88918d25f25c93e2f856e6a805eb7.jpg'
  },
  '5': {
    id: '5',
    name: 'Bruce Banner',
    avatar: 'https://i.redd.it/n4d28b6xggi11.png'
  },
  '6': {
    id: '6',
    name: 'Nick Fury',
    avatar: 'https://images.indianexpress.com/2018/07/samuel-l-jackson-759.jpg'
  }
};

class ChatRoomPage extends React.Component {

  /* Event Listener */

  handleWindowResize = throttle(200, () => {
    if (window && navigator) {
      this.setState({
        sizing: window.innerWidth < 640 || /iPhone|iPod|Android/i.test(navigator.userAgent)
          ? 'mobile'
          : window.innerWidth < 1024 || /iPad|Tablet/i.test(navigator.userAgent)
            ? 'tablet'
            : 'desktop'
      });
    }
  });

  /* Lifecycle */

  constructor (props) {
    super(props);
    this.state = {
      filter: '',
      input: '',
      layout: 'staggered',
      offset: 0,
      sizing: 'desktop',
      theme: 'light'
    };
  }

  componentDidMount = () => {
    if (window) {
      window.addEventListener('resize', this.handleWindowResize);
      this.handleWindowResize();
    }
  };

  componentWillUnmount = () => {
    if (window) {
      window.removeEventListener('resize', this.handleWindowResize);
    }
  };

  render = () => {
    const { input, ...context } = this.state;
    return (
      <div className='storybook__segment storybook__segment--row storybook__segment--full'>
        <div className='storybook__segment storybook__segment--column'>
          <div className='storybook__container'>
            <span className='storybook__text storybook__title'>
              Embedding
            </span>
            <span className='storybook__text'>
              Chat room can be embedded into DOM elements by handling overflow with scroll
              and setting it to fill the height and width of the DOM element.
            </span>
            <span className='storybook__text'>
              It is important to ensure that the width and height are fixed to give chat room the context for sizing.
              Chat room is styled using <code>rem</code> unit, hence it will comply and scale with your root font size.
            </span>
          </div>
          <div className='storybook__container'>
            <span className='storybook__text storybook__title'>
              Supplying Context
            </span>
            <span className='storybook__text'>
              Since chat room is a HOC, it will not be consuming any context.
              Instead, you can supply it with the settings for themes, layout and sizing using props.
              These values will be provided as context to render the subviews that it comprises.
            </span>
            <span className='storybook__text'>
              Media, attachments and themes are not supported yet but will be in the near future.
            </span>
            <div className='storybook__segment storybook__segment--column'>
              <br/>
              <span>
                {'Current layout: '}
                <code>{context.layout}</code>
              </span>
              <br/>
              <button
                className='storybook__button'
                onClick={() => this.setState({
                  layout: context.layout === 'staggered' ? 'aligned' : 'staggered'
                })}
              >
                <span>Toggle Layout</span>
              </button>
              <br/>
              <span>
                {'Current theme: '}
                <code>{context.theme}</code>
              </span>
              <br/>
              <button
                className='storybook__button'
                onClick={() => this.setState({
                  theme: context.theme === 'light' ? 'dark' : 'light'
                })}
              >
                <span>Toggle Theme</span>
              </button>
            </div>
          </div>
          <div className='storybook__container'>
            <span className='storybook__text storybook__title'>
              Controlled Input
            </span>
            <span className='storybook__text'>
              Input value can be affected through the key <code>inputValue</code> and is intercepted using <code>onInput</code>.
            </span>
            <span className='storybook__text'>
              The value will be a stringified representation of inner HTML. Since the value will be set into inner HTML,
              it is critical to sanitize the value before updating the <code>value</code> props.
            </span>
            <span className='storybook__text'>
              Sanitization is performed using <code>DOMPurify</code> within the InputGroup component.
            </span>
            <div className='storybook__segment storybook__segment--column'>
              <br/>
              <span>
                {'Input Intercepted: '}
              </span>
              <br/>
              <div className='storybook__code-preview'>
                <span className='storybook__code-preview-text'>
                  {input}
                </span>
              </div>
            </div>
          </div>
          <div className='storybook__container'>
            <span className='storybook__text storybook__title'>
              Example
            </span>
            <span className='storybook__text'>
              The following frame is an example of the chat room within a container that has been set to
              <code>width: 100%;</code> and <code>height: 30rem;</code>. Do try to resize your browser to
              test the responses to changes in height and width.
            </span>
          </div>
        </div>
        <div className='storybook__segment storybook__segment--column storybook__scroll-column story-chat-room__preview'>
          <div className='storybook__container storybook__segment--full'>
            <ChatRoom
              attachOptions={attachOptionsStub}
              inputHint='Type here...'
              inputValue={input}
              layout={context.layout}
              menuActions={menuActionsStub}
              messages={messagesStub}
              onAttach={action('Attach Clicked')}
              onAvatar={action('Avatar Clicked')}
              onContent={action('Content Clicked')}
              onFilter={this.updateFilter}
              onInfo={action('Info Clicked')}
              onInput={this.updateInput}
              onMenu={action('Menu Clicked')}
              onRefresh={this.updateMessages}
              onReturn={action('Return Clicked')}
              onSend={this.sendMessage}
              roomId='123'
              roomName='Avengers Assemble'
              sizing={context.sizing}
              theme={context.theme}
              userId='1'
              users={usersStub}
            />
          </div>
        </div>
      </div>
    );
  };

  /* Events */

  updateFilter = (nextInput) => {
    action('Filter Changed')(nextInput);
    this.setState({
      filter: nextInput
    });
  };

  updateInput = (nextInput) => {
    action('Input Changed')(nextInput);
    this.setState({
      input: nextInput
    });
  };

  updateMessages = () => {
    // TODO: Mock refresh logic...
    action('Messages Changed')();
  };

  sendMessage = (input) => {
    action('Input Submitted')(input);
    this.setState({
      input: ''
    });
  };

}

export default ChatRoomPage;
