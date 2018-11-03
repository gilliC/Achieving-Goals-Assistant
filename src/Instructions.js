import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {
  Title,
  Paragraph,
  PargraphBold,
  ViewPadding,
  AlignRow,
  FlexView,
} from './components/general_components';

const steps = [
  ' Add a goal in Profile page ',
  "Press + every time you make a step that brings your colser to your target. for example if you want to quite smoking, press + when you want to smoke but you still don't smoke",
  'Press - every time you make a step that takes you further from your goal',
  'Get points and see how close are you to your target. That would help you stay motivated.',
  'When you reach the goal, your goal number increased',
  'You can have multiple goals, and by long pressing your goal in the profile page,you can delete the goal',
];

export default class GoalItem extends Component {
  render() {
    let stepsComponents = steps.map((step, index) => {
      return <Step step={step} index={index + 1} key={index} />;
    });
    return (
      <ViewPadding marginleft="20px" marginright="20px">
        <ScrollView>
          <Title size="40px">Instructions</Title>
          <Paragraph>
            Just a simple app that helps you track down your activtities towards
            achieving your goals.
          </Paragraph>
          {stepsComponents}
          <Title>Good Luck!</Title>
        </ScrollView>
      </ViewPadding>
    );
  }
}
const Step = ({index, step}) => {
  return (
    <View>
      <ViewPadding marginright="10px">
        <PargraphBold left underline>
          Step {index}:
        </PargraphBold>
      </ViewPadding>
      <Paragraph left>{step}</Paragraph>
    </View>
  );
};
