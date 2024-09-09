import {Meta, StoryObj} from '@storybook/react';
import {Rating, RatingPropsType} from './Rating';
import {useState} from 'react';
import {RatingValue} from '../../App';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Rating> = {
    title: 'Rating',
    component: Rating,
    argTypes: {
        onClick: { action: 'change Rating'}
    }
}

export default meta

type Story = StoryObj<typeof Rating>;

export const Rating0: Story = {
    args: {
        value: 0,
        onClick: action('set rating')
    }
}

export const Rating1: Story = {
    args: {
        value: 1,
        onClick: action('set rating')
    }
}

export const Rating2: Story = {
    args: {
        value: 2,
        onClick: action('set rating')
    }
}

export const Rating3: Story = {
    args: {
        value: 3,
        onClick: action('set rating')
    }
}

export const Rating4: Story = {
    args: {
        value: 4,
        onClick: action('set rating')
    }
}

export const Rating5: Story = {
    args: {
        value: 5,
        onClick: action('set rating')
    }
}

const RatingChanging = (args: RatingPropsType) => {
    const [rating, setRating] = useState<RatingValue>(args.value)
    return <Rating value={rating} onClick={setRating}/>
}

export const RatingChangeDemo: Story = {
    args: {
      value: 1
    },
    render: (args) => <RatingChanging {...args}/>
}

