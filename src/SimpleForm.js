import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Review from './Review';

class SimpleForm extends Component {
    render() {
      return (
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Cual es tu nombre?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hola {previousValue}! Cuentanos en que podemos ayudarte?',
              trigger: 'gender',
            },
            {
              id: 'gender',
              options: [
                { value: 'cancelar', label: 'cancelar cita', trigger: '5' },
                { value: 'Agregar', label: 'agregar cita', trigger: '5' },
              ],
            },
            {
              id: '5',
              message: 'Cuentanos que edad tienes?',
              trigger: 'age',
            },
            {
              id: 'age',
              user: true,
              trigger: '7',
              validator: (value) => {
                if (isNaN(value)) {
                  return 'value must be a number';
                } else if (value < 0) {
                  return 'value must be positive';
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }
  
                return true;
              },
            },
            {
              id: '7',
              message: 'Estamos haciendo el proceso',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: 'Esta seguro en continuar?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'no', label: 'no', trigger: 'update-yes' },
                { value: 'yes', label: 'Si', trigger: 'end-message' },
              ],
            },
            {
              id: 'update-yes',
              message: 'Tienes que arreglar algo?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'nombre', label: 'Name', trigger: 'update-name' },
                { value: 'cita', label: 'Gender', trigger: 'update-gender' },
                { value: 'edad', label: 'Age', trigger: 'update-age' },
              ],
            },
            {
              id: 'update-name',
              update: 'nombre',
              trigger: '7',
            },
            {
              id: 'update-gender',
              update: 'gender',
              trigger: '7',
            },
            {
              id: 'update-age',
              update: 'Años',
              trigger: '7',
            },
            {
              id: 'end-message',
              message: 'Gracias por la informacion , al correo llegara tu solicitud',
              end: true,
            },
          ]}
        />
      );
    }
  }
  
  export default SimpleForm;