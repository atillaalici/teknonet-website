import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('Hero');

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p className="mb-4 text-sm text-muted-foreground">
          {t('badge')}
        </p>

        <h1 className="text-4xl font-bold">
          {t('title')}
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          {t('description')}
        </p>
      </div>
    </main>
  );
}