/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import { format } from 'date-fns';
import DatePicker, { registerLocale } from 'react-datepicker';
import TimeField from 'react-simple-timefield';

import pt from 'date-fns/locale/pt';

import 'react-datepicker/dist/react-datepicker.css';
import Logo from '../../assets/solidies-logo.svg';
import api from '../../services/api';

import { Form, Container } from './styles';

registerLocale('pt', pt);

class TimeForm extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    date: new Date(),
    arrivaltime: '',
    lunchtimestart: '',
    lunchtimeend: '',
    exittime: '',
    error: '',
    times: [],
  };

  async componentDidMount() {
    const { data } = await api.get('/times');

    if (data) {
      this.setState({ times: data });
    }
  }

  handleSaveTime = async e => {
    e.preventDefault();
    const {
      date,
      arrivaltime,
      lunchtimestart,
      lunchtimeend,
      exittime,
    } = this.state;

    if (
      arrivaltime === '00:00' ||
      !arrivaltime ||
      lunchtimestart === '00:00' ||
      !arrivaltime ||
      lunchtimeend === '00:00' ||
      !arrivaltime ||
      exittime === '00:00' ||
      !arrivaltime
    ) {
      this.setState({ error: 'Preencha todos os horários para salvar' });
    } else {
      try {
        const newDate = format(date, 'yyyy-MM-dd').substr(0, 10);
        const newArrivaltime = `${arrivaltime}:00`;
        const newLunchtimestart = `${lunchtimestart}:00`;
        const newLunchtimeend = `${lunchtimeend}:00`;
        const newExittime = `${exittime}:00`;

        await api.post('/times', {
          date: newDate,
          arrivaltime: newArrivaltime,
          lunchtimestart: newLunchtimestart,
          lunchtimeend: newLunchtimeend,
          exittime: newExittime,
        });

        const { data } = await api.get('/times');

        if (data) {
          this.setState({ times: data });
        }
        // eslint-disable-next-line react/prop-types
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        this.setState({ error: 'Ocorreu um erro ao salvar' });
      }
    }
  };

  async handleDelete(key) {
    await api.delete(`/times/${key}`);

    const { data } = await api.get('/times');

    if (data) {
      this.setState({ times: data });
    }
  }

  render() {
    const { times } = this.state;
    return (
      <>
        <Container>
          <Form onSubmit={this.handleSaveTime}>
            <img src={Logo} alt="Solides logo" />
            {this.state.error && <p>{this.state.error}</p>}
            <DatePicker
              selected={this.state.date}
              onChange={date => this.setState({ date })}
              locale="pt"
              dateFormat="dd/MM/yyyy"
            />
            <div id="hours">
              <p>Horário de Entrada</p>
              <TimeField
                value="00:00"
                onChange={e => this.setState({ arrivaltime: e.target.value })}
                style={{
                  fontSize: 24,
                  width: 180,
                  padding: '5px 8px',
                  color: '#333',
                  borderRadius: 3,
                  paddingLeft: 50,
                }}
              />
            </div>
            <div id="hours">
              <p>Começo do almoço</p>
              <TimeField
                value="00:00"
                onChange={e =>
                  this.setState({ lunchtimestart: e.target.value })
                }
                style={{
                  fontSize: 24,
                  width: 180,
                  padding: '5px 8px',
                  color: '#333',
                  borderRadius: 3,
                  paddingLeft: 50,
                }}
              />
            </div>
            <div id="hours">
              <p>Final do Almoço</p>
              <TimeField
                value="00:00"
                onChange={e => this.setState({ lunchtimeend: e.target.value })}
                style={{
                  fontSize: 24,
                  width: 180,
                  padding: '5px 8px',
                  color: '#333',
                  borderRadius: 3,
                  paddingLeft: 50,
                }}
              />
            </div>
            <div id="hours">
              <p>Hórario de Saída</p>
              <TimeField
                value="00:00"
                onChange={e => this.setState({ exittime: e.target.value })}
                style={{
                  fontSize: 24,
                  width: 180,
                  padding: '5px 8px',
                  color: '#333',
                  borderRadius: 3,
                  paddingLeft: 50,
                }}
              />
            </div>
            <button style={{ background: '#7159c1' }} type="submit">
              Salvar Horários
            </button>
            <hr />
            <p> Datas Salvas </p>
            <ul>
              {times.map(time => (
                <li key={time.date}>
                  <span>
                    {format(
                      new Date(time.date.replace(/-/g, '/')),
                      'dd/MM/yyyy'
                    )}
                  </span>
                  <span>|</span>
                  <span>{time.arrivaltime.substr(0, 5)}</span>
                  <span>|</span>
                  <span>{time.lunchtimestart.substr(0, 5)}</span>
                  <span>|</span>
                  <span>{time.lunchtimeend.substr(0, 5)}</span>
                  <span>|</span>
                  <span>{time.exittime.substr(0, 5)}</span>
                  <span>|</span>
                  <FaTrashAlt
                    color="#7159c1"
                    size={20}
                    onClick={() => this.handleDelete(time.id)}
                  />
                </li>
              ))}
            </ul>
          </Form>
        </Container>
      </>
    );
  }
}

export default withRouter(TimeForm);
