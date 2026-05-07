import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          src="/images/iconnn.png"
          alt="Netwatch.ai"
          width={24}
          height={24}
        />
        Netwatch.ai
      </>
    ),
  },
  links: [
    {
      text: ' ',
      url: '/docs',
      active: 'nested-url',
    },
  ],
}