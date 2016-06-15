import React from 'react';

function list(repos) {
  return repos[0].map((repo, i) => {
    return (<li key={i}>{repo.full_name}</li>);
  });
}

export default (props) => {
  return (
    <ul>
      {list(props.repos)}
    </ul>
  );
}
