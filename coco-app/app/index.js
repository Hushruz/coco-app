import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Link href="/onboarding/">Onboarding</Link>
      {/* ...other links */}
    </View>
  );
}