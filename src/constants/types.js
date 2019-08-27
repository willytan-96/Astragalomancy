import Size from './size';

export const StyleType = {
	primary: "PRIMARY",
	secondary: "SECONDARY",
	success: "SUCCESS",
	failure: "FAILURE",
}

export const SizeType = {
	small: "SMALL",
	medium: "MEDIUM",
	large: "LARGE",
}

export const getSizeByType = (sizeType) => (
	sizeType === SizeType.small ? Size.small :
	sizeType === SizeType.medium ? Size.medium :
	sizeType === SizeType.large ? Size.large :
	'0px'
)