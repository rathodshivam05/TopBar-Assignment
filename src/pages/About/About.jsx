import React from 'react';
import './About.scss';
import PageBanner from '../../components/PageBanner/PageBanner';
import AboutBlog from '../../components/AboutBlog/AboutBlog';
import Team from '../../components/Team/Team';

const About = () => {
	return (
		<div>
			<PageBanner
				title={'About'}
				breadCrumbs={[
					{ label: 'Home', link: '/' },
					{ label: 'About', link: '/about' },
				]}
			/>
			<AboutBlog />
			<Team />
		</div>
	)
};

export default About;
