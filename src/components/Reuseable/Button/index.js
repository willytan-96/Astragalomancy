import React from "react";
import PropTypes from "prop-types";
import StyledComponent from "styled-components";
import Colors,{ getColorByType } from "./../../../constants/colors";
import { getSizeByType, SizeType, StyleType } from "./../../../constants/types";

const StyledButton = StyledComponent.div`
	background-color: ${
		({ isEnable }) => isEnable ? Colors.disabledColor : 'unset'
	}	

	border: 1px solid ${
		({ styleType, isEnable }) =>
			isEnable ? Colors.disabledBorderColor : getColorByType(styleType)
	};

	border-radius: ${
		props =>
			props.isRounded ? '50%' : '5px'
	};

	color: ${
		({ styleType, isEnable }) =>
			isEnable ? Colors.whiteColor : getColorByType(styleType)
	};

	cursor: ${
		({ isEnable }) => 
			isEnable ? 'not-allowed' : 'pointer'
	};

	padding: ${
		({ sizeType }) => getSizeByType(sizeType)
	};

	
	&:hover {
		background-color: ${
			({ styleType, isEnable }) =>
				isEnable ? Colors.disabledColor : getColorByType(styleType)
		};

		color: ${Colors.whiteColor};
		border-color: transparent;
	}

	display: inline-block;
	outline: 0;
	text-align: center;
`;

function Button (props) {
	const {
		buttonSize: ButtonSizeType,
		buttonStyle: ButtonStyleType,
		isEnable,
		isRounded,
		onClick: onClickEvent,
		text: ButtonLabel,
	} = props;
	
	return (
		<StyledButton
			isEnable={isEnable}
			isRounded={isRounded}
			onClick={onClickEvent}
			sizeType={ButtonSizeType}
			styleType={ButtonStyleType}
			role="button"
			tabIndex={0}
		>
			{ButtonLabel}
		</StyledButton>
	);
}

Button.propTypes = {
	buttonSize: PropTypes.oneOf([
		SizeType.small,
		SizeType.medium,
		SizeType.large
	]),
	buttonStyle: PropTypes.oneOf([
		StyleType.primary,
		StyleType.secondary,
		StyleType.success,
		StyleType.failure,
	]),
	isEnable: PropTypes.bool.isRequired,
	isRounded: PropTypes.bool,
	onClick: PropTypes.func,
	text: PropTypes.string.isRequired,
}
Button.defaultProps = {
	isRounded: false,
	onClick: () => {},
}

export default Button;