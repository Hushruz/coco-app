import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
    <Text>App worked good</Text>
      <Link href="/onboarding/">Onboarding</Link>
      {/* ...other links */}
    </View>
  );
}