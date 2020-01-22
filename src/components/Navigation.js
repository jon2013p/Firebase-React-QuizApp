import { Icon, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogoutButton from './LogoutButton';
import '../styles/navigation.css';


const SubMenu = Menu.SubMenu;

class Navigation extends React.Component {
  rootSubmenuKeys = [ 'sub1', 'sub2' ];

  state = {
    current: 'home',
    collapsed: false,
    openKeys: []
  };

  onOpenChange = ( openKeys ) => {
    const latestOpenKey = openKeys.find( key => this.state.openKeys.indexOf( key ) === -1 );
    if( this.rootSubmenuKeys.indexOf( latestOpenKey ) === -1 ) {
      this.setState( { openKeys } );
    } else {
      this.setState( {
        openKeys: latestOpenKey
          ? [ latestOpenKey ]
          : []
      } );
    }
  };

  handleClick = ( e ) => {
    console.log( 'click ', e );
    this.setState( {
      current: e.key
    } );
  };

  render() {
    return (
      this.props.isAuthenticated
        ?
        <Menu
          onClick={ this.handleClick }
          openKeys={ this.state.openKeys }
          mode='inline'
          theme='light'
          inlineCollapsed={ this.state.collapsed }
          onOpenChange={ this.onOpenChange }
          className='menu'
        >
          <Menu.Item key='home'>
            <Link to='/'> <Icon type="form" /><span>Questions Form</span></Link>
          </Menu.Item>



          <Menu.Item key='logout'>
            <LogoutButton />
          </Menu.Item>
        </Menu>
        : null
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect( mapStateToProps )( Navigation );