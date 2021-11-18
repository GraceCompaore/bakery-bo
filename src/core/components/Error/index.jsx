import error from './error.jpg';

// const ErrorWrapper = styled.div`
//   margin: 30px;
//   display: flex;
//   flex-direction: column;

//   align-items: center;
// `;

// const ErrorTitle = styled.h1`
//   font-weight: 300;
// `;

// const ErrorSubtitle = styled.h2`
//   font-weight: 300;
// `;

// const Illustration = styled.img`
//   max-width: 800px;
// `;

function Error() {
  return (
    <div>
      <h1>Oups...</h1>
      <img src={error} />
      <h2>Il semblerait que la page que vous cherchez n’existe pas</h2>
    </div>
  );
}

export default Error;
