import React from 'react';

// function list(repos) {
//   return repos[0].map((repo, i) => {
//     return (
//       <tr key={i}>
//         <td>{repo.full_name}</td>
//         <td>{repo.language}</td>
//       </tr>
//     );
//   });
// }

//var divStyle = {"backgroundImage": "url('images/github_icon.png')"};

function list(repos) {
  return repos[0].map((repo, i) => {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 nopadding" key={i} >
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="img-wrapper">
            </div>
            <h3 className="panel-title">{repo.full_name}</h3>
            <p className="level">{repo.stargazers_count} Stars</p>
            <p><img src="language.png" className="icon" />  {repo.language}</p>
          </div>
        </div>
      </div>
      );
  });
}



// export default (props) => {
//   return (
//     <table className="table table-striped">
//       <thead>
//         <tr>
//           <td className="h5">Name</td>
//           <td className="h5">Language</td>
//         </tr>
//       </thead>
//       <tbody>
//         {list(props.repos)}
//       </tbody>
//     </table>
//   );
// }

export default (props) => {
  return (
    <div className="container">
      <div className="row">
        {list(props.repos)}
      </div>
    </div>
  );
}

