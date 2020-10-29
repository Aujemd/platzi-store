import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

/**
 * * Shallow permite traer elementos y probarlos coomo una unidad
 * Probablemente muchos se hagan esta pregunta:
    ¿Cuándo utilizar mount y cuándo utilizar shallow?
    mount --> Cuando necesitas el DOM
    shallow --> Solo necesitas algo particular del componente. No ocupas todo el DOM
 * */

describe('<Header />', () => {
  test('Header component render', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });
  test('Title render', () => {
    const header = mount( //Aqui estamos usando todo el dom completo
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header SnapShot', () => {
  test('Comprobar el SnapShot de Header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );

    expect(header.toJSON()).toMatchSnapshot();
  });
});
