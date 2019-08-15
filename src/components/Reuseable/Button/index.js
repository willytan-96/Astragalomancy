import React from "react";
import PropTypes from "prop-types";
import StyledComponent from "styled-components";
import Colors from "./../../../constants/colors";
import Size from "./../../../constants/size";
import { StyleType, SizeType } from "./../../../constants/types";

const StyledButton = StyledComponent.div`
	background-color: ${
		({ isEnable }) => isEnable ? Colors.disabledColor : 'unset'
	}	

	border: 1px solid ${
		({ styleType, isEnable }) =>
			isEnable ? Colors.disabledBorderColor :
			styleType === StyleType.primary ? Colors.primaryBorderColor :
			styleType === StyleType.secondary ? Colors.secondaryBorderColor :
			Colors.blackColor
	};

	border-radius: ${
		props =>
			props.isRounded ? '50%' : '5px'
	};

	color: ${
		({ styleType, isEnable }) =>
			isEnable ? Colors.whiteColor :
			styleType === StyleType.primary ? Colors.primaryColor :
			styleType === StyleType.secondary ? Colors.secondaryColor :
			Colors.blackColor
	};

	padding: ${
		({ sizeType }) =>
			sizeType === SizeType.small ? Size.small :
			sizeType === SizeType.medium ? Size.medium :
			sizeType === SizeType.large ? Size.large :
			'0px'
	};

	
	&:hover {
		background-color: ${
			({ styleType, isEnable }) =>
				isEnable ? Colors.disabledColor :
				styleType === StyleType.primary ? Colors.primaryColor :
				styleType === StyleType.secondary ? Colors.secondaryColor :
				Colors.blackColor
		};

		border-color: transparent;
		color: ${Colors.whiteColor};
	}

	cursor: pointer;
	display: inline-block;
	outline: 0;
	text-align: center;

`

class Button extends React.PureComponent {
	render() {
		const {
			buttonSize: ButtonSizeType,
			buttonStyle: ButtonStyleType,
			isEnable: EnableStatus,
			isRounded: RoundedStatus = false,
			onClick: onClickEvent,
			text: ButtonLabel,
		} = this.props;

		return (
			<StyledButton
				isEnable={EnableStatus}
				isRounded={RoundedStatus}
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

export default Button;