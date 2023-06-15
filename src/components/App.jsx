import { useEffect, useState } from 'react';
import { TitleFeedback } from './TitleFeedback/TitleFeedback';
import { Buttons } from './Buttons/Buttons';
import { Section } from './Section/Section';
import { Statistic } from './Statistic/Statistic';
import { Notification } from './Notification/Notification';

const options = ['good', 'neutral', 'bad'];

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const [total, setTotal] = useState(0);
  // const [positivePercentage, setPositivePercentage] = useState(0);

  const clickButton = keyButton => {
    switch (keyButton) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);

  return (
    <>
      <TitleFeedback title="Please leave feedback" />
      <Buttons options={options} onClick={clickButton} />
      <Section title="Statistic">
        {total ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   clickButton = keyButton => {
//     this.setState(prevState => ({
//       [keyButton]: prevState[keyButton] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((previousValue, number) => {
//       return previousValue + number;
//     }, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const options = Object.keys(this.state);
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <TitleFeedback title="Please leave feedback" />
//         <Buttons options={options} onClickButton={this.clickButton} />
//         <Section title="Statistic">
//           {total ? (
//             <Statistic
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
