import MockAdapter from 'axios-mock-adapter';

export default function mockAxios(axiosInstance) {
  const mock = new MockAdapter(axiosInstance, { delayResponse: 1000 });

  mock.onPost('/users').reply(200);

  mock.onGet('/users').reply(200, {
    email: 'lenonmauer@gmail.com',
    name: 'Lenon Mauer',
  });

  mock.onPut('/users').reply(200);

  mock.onPost('/sessions').reply(config => {
    const { email, password } = JSON.parse(config.data);

    return [
      200,
      {
        token: '123',
      },
    ];
  });

  mock.onGet('/meetups').reply(request => {
    const now = Date.now();
    const dayInMili = 86400000;
    const { offset, limit } = request.params;

    const data = Array.from({ length: 50 }, (v, k) => {
      const timestamp = now + k * dayInMili;
      const date = new Date(timestamp).toISOString();

      return {
        id: k,
        title: `Meetup ${k}`,
        thumb: 'https://via.placeholder.com/500',
        date,
        location: `Rua zueira`,
        user: {
          name: 'Don Joe',
        },
      };
    });

    const sliced = data.slice(offset, offset + limit);

    return [200, sliced];
  });

  mock.onGet('/meetups/subscriptions').reply(200);
  mock.onGet('/meetups/:meetupId/subscriptions').reply(200);
}
