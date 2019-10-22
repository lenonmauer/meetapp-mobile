import MockAdapter from 'axios-mock-adapter';

export default function mockAxios(axiosInstance) {
  const mock = new MockAdapter(axiosInstance, { delayResponse: 1000 });

  mock.onPost('/users').reply(200);

  mock
    .onPut('/users', {
      name: 'Zueiro',
      email: 'zueiro@gmail.com',
    })
    .reply(200);

  mock.onPost('/sessions').reply(config => {
    const { email, password } = JSON.parse(config.data);

    return [
      200,
      {
        token: '123',
      },
    ];

    if (email === 'lenonmauer@gmail.com' && password === 'slipknot') {
      return [
        200,
        {
          token: '123',
        },
      ];
    }

    return [
      400,
      {
        error: 'Login ou senha inválidos.',
      },
    ];
  });

  mock.onGet('/meetups').reply(200);
  mock.onGet('/meetups/subscriptions').reply(200);
  mock.onGet('/meetups/:meetupId/subscriptions').reply(200);
}
