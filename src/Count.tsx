import React, { Fragment, FunctionComponent } from 'react';

interface Props {
	value: number;
}

const Count: FunctionComponent<Props> = (props) => {
	const { value } = props;

	return (
		<Fragment>
			<h3>Functional Component</h3>
			<p>Expects a value prop to be passed <strong>value: {value}</strong></p>
		</Fragment>
	)
};

export default Count;