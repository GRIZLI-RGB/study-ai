import "./Button.scss";

export default function Button({ text, fill, size, isFullWidth }) {
	return (
		<button className={`button button--${fill} button--${size}`} style={{
            'width': isFullWidth && '100%'
        }}>
			{text}
		</button>
	);
}
