import { Network, Store, RecordSource, Environment } from 'relay-runtime';
import cookie from 'js-cookie';

function fetchQuery(operation, variables) {
  const token = cookie.get('token');
  return fetch(`${process.env.NEXT_PUBLIC_BACKEND}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

export default function makeEnvrionment() {
  return new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
  });
}
