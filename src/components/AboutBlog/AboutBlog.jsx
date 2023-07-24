import React from 'react';
import './AboutBlog.scss';
import about from '../../assets/images/about.png'

const AboutBlog = () => {
    return (
        <div className='about'>
            <div className='content'>
                <h1>Trupti Treats</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nemo, sed excepturi officiis ad qui error? Exercitationem eius enim suscipit ipsam ab saepe maiores rerum ut unde corporis eligendi natus quo cupiditate, reiciendis inventore in accusamus voluptate at recusandae ullam laudantium doloribus tenetur? Vero enim quae repellendus fugiat dolor nobis!
                <br />
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus repellat assumenda cupiditate beatae soluta eum nesciunt quidem quia, sed minus non deleniti. Quos odit, exercitationem quidem cupiditate vero eum fugiat labore ad facilis voluptas repudiandae sed. Quaerat suscipit voluptas omnis reiciendis ullam asperiores ad vitae facere rerum necessitatibus, quibusdam, repudiandae eos voluptates voluptatum quia nostrum earum eaque accusamus, tenetur ipsum aspernatur. Delectus dolore qui ducimus error praesentium laboriosam, commodi harum quod aperiam maxime accusamus a maiores quam exercitationem voluptatum.
            </div>
            <div className='img'>
                <img src={about} alt="img" />
            </div>
        </div>
    )
}

export default AboutBlog