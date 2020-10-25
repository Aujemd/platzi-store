import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Product from '../../components/Product';
import ProductMock from '../../__mocks__/ProductMock';

describe('<Product />', () => {
  test('Product component render', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(product.length).toEqual(1);
  });
  test('Verify buy button', () => {
    const handleAddToCar = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCar} />
      </ProviderMock>,
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCar).toHaveBeenCalledTimes(1);
  });
});
