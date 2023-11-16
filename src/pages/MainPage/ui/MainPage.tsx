import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import Input from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
            <Input
                placeholder={t('Введите текст')}
            />
        </div>
    );
};

export default MainPage;
