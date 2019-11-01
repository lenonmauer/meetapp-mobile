import MockAdapter from 'axios-mock-adapter';

function generateMeetups({ offset, limit }) {
  const now = Date.now();
  const dayInMili = 86400000;

  const data = Array.from({ length: 25 }, (v, k) => {
    const id = k + 1;
    const timestamp = now + k * dayInMili;
    const date = new Date(timestamp).toISOString();

    return {
      id,
      title: `Meetup ${id}`,
      thumb: 'https://via.placeholder.com/500',
      date,
      location: `Rua zueira`,
      user: {
        name: 'Don Joe',
      },
    };
  });

  return data.slice(offset, offset + limit);
}

export default function mockAxios(axiosInstance) {
  const mock = new MockAdapter(axiosInstance, { delayResponse: 1000 });

  mock.onPost('/users').reply(200);

  mock.onGet('/users').reply(200, {
    email: 'lenonmauer@gmail.com',
    name: 'Lenon Mauer',
  });

  mock.onPut('/users').reply(200);

  mock.onPost('/sessions').reply(config => {
    return [
      200,
      {
        token: '123',
      },
    ];
  });

  mock.onGet('/meetups').reply(request => {
    const { offset, limit } = request.params;

    const meetups = generateMeetups({ offset, limit });

    return [200, meetups];
  });

  mock.onGet('/subscriptions').reply(request => {
    const { offset, limit } = request.params;

    const meetups = generateMeetups({ offset, limit });

    return [200, meetups];
  });

  mock.onPost(/\/meetups\/\d+\/subscriptions/).reply(200);

  mock.onDelete(/\/subscriptions\/\d+/).reply(200);
}
