import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChanges = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(res => {
            if (res) { this.props.history.push('/list')};
        })
    }  

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input 
                        type="username" 
                        placeholder="username"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChanges} 
                    />
                    <input 
                        type="password" 
                        placeholder="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChanges} 
                    />
                    <button 
                        type="submit">
                        {this.props.loggingIn ? (
                            'logging in...')
                            : ( 'Log In')
                        }
                    </button>
                </form>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    loggingIn: state.loggingIn
})

export default connect(
    mapStateToProps,
    { login }
  )(Login);