import { isDark } from "../constants/DarkLightType";

export const dark = () => {
	return {
		type: isDark,
	};
};
