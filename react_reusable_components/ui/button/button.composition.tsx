import React from 'react';
import { Button } from './button';

export const BasicButton = () => {

  return (
    <section>
		<div>
			<h2>Buttons</h2>
		</div>
		<div>
			<Button>Default</Button>
			<Button color="primary">Primary</Button>
			<Button color="secondary">Secondary</Button>
			<Button color="accent">Accent</Button>
			<Button color="danger">Danger</Button>
		</div>
	</section>
  );
}
