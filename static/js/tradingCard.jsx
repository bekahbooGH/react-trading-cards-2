function TradingCard(props) {
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <img src={props.imgUrl} />
      <p>Skill: {props.skill} </p>
    </div>
  );
};

function TradingCardContainer() {

  React.useEffect(() => {
    fetch('/cards.json')
    .then((response) => response.json())
    .then((data) => updateCards(data))
  }, []);



  const [cards, updateCards] = React.useState('cards');
  const tradingCards = [];
  for (const currentCard of cards) {
    tradingCards.push(
      <TradingCard
        key={currentCard.name}
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />
    );
  }

  return (
    <div>{tradingCards}</div>
  );
}

ReactDOM.render(
  <TradingCardContainer />,
  document.getElementById('container')
);
