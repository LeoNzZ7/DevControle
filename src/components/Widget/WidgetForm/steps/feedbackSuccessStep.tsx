import { CloseButton } from "../../closeButton";

type Props = {
    onFeedbackRestart: () => void
}

export const FeedbackSuccessStep = ({ onFeedbackRestart }: Props) => {
    return (
        <>
            <header>
                <CloseButton />
            </header>
            <div className="flex flex-col items-center py-10 w-[304px" >
                <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.5 32C36.5 34.209 34.709 36 32.5 36H4.5C2.291 36 0.5 34.209 0.5 32V4C0.5 1.791 2.291 0 4.5 0H32.5C34.709 0 36.5 1.791 36.5 4V32Z" fill="#77B255" />
                    <path d="M29.78 6.362C28.624 5.611 27.076 5.94 26.322 7.098L15.436 23.877L10.407 19.227C9.393 18.289 7.811 18.352 6.874 19.365C5.937 20.379 5.999 21.961 7.013 22.898L14.222 29.564C14.702 30.009 15.312 30.229 15.918 30.229C16.591 30.229 17.452 29.947 18.017 29.09C18.349 28.584 30.517 9.82 30.517 9.82C31.268 8.661 30.938 7.113 29.78 6.362Z" fill="white" />
                </svg>
            </div>
            <span className="text-xl mt-2">Agradecemos o seu Feedback!</span>
            <button onClick={onFeedbackRestart} type="button" className="py-2 px-6 mb-6 mt-6 bg-neutral-800 rounded-md border-transparent text-sm leading-6 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-blue-500">Quer enviar outro?</button>
        </>
    );
}