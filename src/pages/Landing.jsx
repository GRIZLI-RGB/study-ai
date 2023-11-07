import Header from "../components/Header";
import Footer from "../components/Footer";
import WelcomeBlock from "../components/LandingBlocks/WelcomeBlock";
import OnlineHelpBlock from "../components/LandingBlocks/OnlineHelpBlock";
import ForStudentsBlock from "../components/LandingBlocks/ForStudentsBlock";
import RecognizeTextBlock from "../components/LandingBlocks/RecognizeTextBlock";
import RecognizeAudioBlock from "../components/LandingBlocks/RecognizeAudioBlock";
import FeedbacksBlock from "../components/LandingBlocks/FeedbacksBlock";
import ContactsBlock from "../components/LandingBlocks/ContactsBlock";

export default function Landing() {
	return (
		<>
			<Header />
			<WelcomeBlock />
			<OnlineHelpBlock />
			<ForStudentsBlock />
			<RecognizeTextBlock />
			<RecognizeAudioBlock />
			<FeedbacksBlock />
			<ContactsBlock />
			<Footer />
		</>
	);
}
