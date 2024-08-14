import { FC, useState } from 'react';
import { MainButton, MainButtonProps } from '@vkruglikov/react-telegram-web-app';
const Rocket: FC = () => {
    const [buttonState, setButtonState] = useState<
        {
            show: boolean;
        } & Pick<MainButtonProps, 'text' | 'progress' | 'disable'>
    >({
        text: 'BUTTON TEXT',
        show: false,
        progress: false,
        disable: false,
    });
    return (
        <>

            <div onClick={() => {
                setButtonState({
                    ...buttonState,
                    disable: true,
                    progress: true,
                })
            }}>是的</div>
            <div onClick={() => {
                setButtonState({
                    ...buttonState,
                    disable: false,
                    progress: false,
                })
            }}>假的</div>
            <div
                onClick={() =>
                    setButtonState({
                        ...buttonState,
                        show: !buttonState?.show,
                    })
                }
            >
                {buttonState?.show ? 'Hide MainButton' : 'Show MainButton'}
            </div>
            <div>{buttonState?.show && <MainButton {...buttonState} />}</div>
        </>
    );
}

export default Rocket;