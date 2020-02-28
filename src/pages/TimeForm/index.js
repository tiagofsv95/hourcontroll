/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logo from '../../assets/solidies-logo.svg';
// import api from '../../services/api';

import { Form, Container } from './styles';

class SignUp extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    username: '',
    email: '',
    password: '',
    error: '',
  };

  handleSignUp = async e => {
    e.preventDefault();
    /* const { username, email, password } = this.state;
    if (!username || !email || !password) {
      this.setState({ error: 'Preencha todos os dados para se cadastrar' });
    } else {
      try {
        await api.post('/users', { username, email, password });
        // eslint-disable-next-line react/prop-types
        this.props.history.push('/');
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        this.setState({ error: 'Ocorreu um erro ao registrar sua conta. T.T' });
      }
    } */
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="Solides logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="date"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />
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
          <button type="submit">Cadastrar grátis</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
