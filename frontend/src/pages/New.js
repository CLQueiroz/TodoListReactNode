import React, { Component } from "react";
import api from "../services/api";
import "./New.css";

// import { Container } from './styles';

export default class New extends Component {
  state = {
    task: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    await api.post("/tasks", {
      task: this.state.task
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <form action="" id="new-post" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Digite sua Tarefa "
          onChange={this.handleChange}
          value={this.state.task}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
