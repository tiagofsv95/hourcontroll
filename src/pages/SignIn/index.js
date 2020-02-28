/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logo from '../../assets/solidies-logo.svg';
import api from '../../services/api';
import { login } from '../../services/auth';

import { Form, Container } from './styles';

class SignIn extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    email: '',
    password: '',
    error: '',
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: 'Preencha e-mail e senha para continuar!' });
    } else {
      try {
        const response = await api.post('/sessions', { email, password });
        login(response.data.token);
        // eslint-disable-next-line react/prop-types
        this.props.history.push('/app');
      } catch (err) {
        this.setState({
          error:
            'Houve um problema com o login, verifique suas credenciais. T.T',
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <img src={Logo} alt="Solidies logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signup">Criar conta grátis</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);
