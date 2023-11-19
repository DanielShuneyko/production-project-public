import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, Buttontheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: Buttontheme.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: Buttontheme.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: Buttontheme.OUTLINE,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: Buttontheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    theme: Buttontheme.OUTLINE,
    size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: Buttontheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: Buttontheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: Buttontheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: Buttontheme.BACKGROUND_INVERTED,
    square: true,
};
export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: Buttontheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};
export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: Buttontheme.BACKGROUND_INVERTED,
    square: true,
    disabled: true,
};

export const Disabled = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: Buttontheme.OUTLINE,
    size: ButtonSize.XL,
};
