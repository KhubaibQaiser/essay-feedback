import React from 'react';
import { iEssayProps } from './types';
import { Typography, Stack } from '@mui/material';

const Essay: React.VFC<iEssayProps> = ({ id }) => {
  // fetch essay using some api
  // for now: just hard code it

  console.log('FETCH ESSAY: ', { id });

  return (
    <Stack spacing={3} alignItems='center'>
      <Typography variant='h3' color='HighlightText' fontWeight={600}>
        Essay Title
      </Typography>
      <Stack spacing={1}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere dolor non lectus
          consequat, a mattis odio faucibus. Donec nec scelerisque quam. Proin auctor pharetra
          velit, quis pharetra sem sollicitudin sit amet. Pellentesque commodo pellentesque gravida.
          Morbi interdum suscipit tellus sit amet condimentum. In vestibulum ipsum eget lacus
          imperdiet blandit. Pellentesque sollicitudin metus eu interdum tincidunt. Maecenas massa
          mauris, sagittis id dolor a, suscipit auctor massa. Phasellus pretium urna vitae placerat
          accumsan. Quisque et eros commodo, varius lorem vel, tincidunt dui. Nam interdum mi
          ultrices massa facilisis pellentesque.
        </Typography>
        <Typography>
          Nulla vel malesuada mauris. In odio metus, aliquet et scelerisque sed, volutpat in sapien.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Vivamus fermentum feugiat accumsan. Curabitur ut dapibus tellus, nec bibendum nulla. Donec
          malesuada leo sit amet tellus lobortis consequat. Aliquam a dictum massa. Proin posuere ex
          nec commodo elementum. Donec at tempus odio. Vivamus tempor rhoncus mauris, congue porta
          velit suscipit ac. Fusce ante massa, pharetra sit amet ligula vitae, molestie aliquet
          nisl. Maecenas mollis ex nibh, quis facilisis leo tincidunt ac. Cras fringilla metus ac
          urna ornare, id pulvinar arcu faucibus. Suspendisse ultrices id augue at semper. Mauris in
          tempor orci, ut bibendum leo.
        </Typography>
        <Typography>
          Cras sit amet rutrum risus, et aliquet diam. Suspendisse leo tortor, finibus a mi a,
          sollicitudin luctus nisi. Quisque non velit ultrices, accumsan lectus a, tempor libero. Ut
          sed tempus elit, nec commodo nulla. Ut imperdiet lectus est, vel sollicitudin arcu
          tincidunt vel. Duis vel convallis eros. Mauris in ultricies dui, non hendrerit diam. Nulla
          ultricies enim vitae lacus cursus lobortis. Nam non ultrices ex, quis fermentum ipsum. Ut
          ac dictum odio.
        </Typography>
        <Typography>
          Suspendisse ullamcorper maximus enim eu sagittis. Pellentesque non efficitur libero. Nam
          vel auctor odio, sed bibendum urna. Mauris libero turpis, elementum id ligula at, dictum
          placerat arcu. Ut pulvinar fringilla est a semper. Suspendisse potenti. Maecenas sagittis
          tempus neque nec faucibus.
        </Typography>
        <Typography>
          Nullam ut gravida lacus. Donec nec ipsum et nulla faucibus ullamcorper ut a nibh. Nunc
          laoreet et eros quis hendrerit. Donec vulputate mauris eu tincidunt aliquet. Maecenas sed
          varius lorem, nec mattis ipsum. Donec sagittis tempus nulla, nec ultrices risus tristique
          in. Praesent eu congue nisl, dapibus vestibulum arcu.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere dolor non lectus
          consequat, a mattis odio faucibus. Donec nec scelerisque quam. Proin auctor pharetra
          velit, quis pharetra sem sollicitudin sit amet. Pellentesque commodo pellentesque gravida.
          Morbi interdum suscipit tellus sit amet condimentum. In vestibulum ipsum eget lacus
          imperdiet blandit. Pellentesque sollicitudin metus eu interdum tincidunt. Maecenas massa
          mauris, sagittis id dolor a, suscipit auctor massa. Phasellus pretium urna vitae placerat
          accumsan. Quisque et eros commodo, varius lorem vel, tincidunt dui. Nam interdum mi
          ultrices massa facilisis pellentesque.
        </Typography>
        <Typography>
          Nulla vel malesuada mauris. In odio metus, aliquet et scelerisque sed, volutpat in sapien.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Vivamus fermentum feugiat accumsan. Curabitur ut dapibus tellus, nec bibendum nulla. Donec
          malesuada leo sit amet tellus lobortis consequat. Aliquam a dictum massa. Proin posuere ex
          nec commodo elementum. Donec at tempus odio. Vivamus tempor rhoncus mauris, congue porta
          velit suscipit ac. Fusce ante massa, pharetra sit amet ligula vitae, molestie aliquet
          nisl. Maecenas mollis ex nibh, quis facilisis leo tincidunt ac. Cras fringilla metus ac
          urna ornare, id pulvinar arcu faucibus. Suspendisse ultrices id augue at semper. Mauris in
          tempor orci, ut bibendum leo.
        </Typography>
        <Typography>
          Cras sit amet rutrum risus, et aliquet diam. Suspendisse leo tortor, finibus a mi a,
          sollicitudin luctus nisi. Quisque non velit ultrices, accumsan lectus a, tempor libero. Ut
          sed tempus elit, nec commodo nulla. Ut imperdiet lectus est, vel sollicitudin arcu
          tincidunt vel. Duis vel convallis eros. Mauris in ultricies dui, non hendrerit diam. Nulla
          ultricies enim vitae lacus cursus lobortis. Nam non ultrices ex, quis fermentum ipsum. Ut
          ac dictum odio.
        </Typography>
        <Typography>
          Suspendisse ullamcorper maximus enim eu sagittis. Pellentesque non efficitur libero. Nam
          vel auctor odio, sed bibendum urna. Mauris libero turpis, elementum id ligula at, dictum
          placerat arcu. Ut pulvinar fringilla est a semper. Suspendisse potenti. Maecenas sagittis
          tempus neque nec faucibus.
        </Typography>
        <Typography>
          Nullam ut gravida lacus. Donec nec ipsum et nulla faucibus ullamcorper ut a nibh. Nunc
          laoreet et eros quis hendrerit. Donec vulputate mauris eu tincidunt aliquet. Maecenas sed
          varius lorem, nec mattis ipsum. Donec sagittis tempus nulla, nec ultrices risus tristique
          in. Praesent eu congue nisl, dapibus vestibulum arcu.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere dolor non lectus
          consequat, a mattis odio faucibus. Donec nec scelerisque quam. Proin auctor pharetra
          velit, quis pharetra sem sollicitudin sit amet. Pellentesque commodo pellentesque gravida.
          Morbi interdum suscipit tellus sit amet condimentum. In vestibulum ipsum eget lacus
          imperdiet blandit. Pellentesque sollicitudin metus eu interdum tincidunt. Maecenas massa
          mauris, sagittis id dolor a, suscipit auctor massa. Phasellus pretium urna vitae placerat
          accumsan. Quisque et eros commodo, varius lorem vel, tincidunt dui. Nam interdum mi
          ultrices massa facilisis pellentesque.
        </Typography>
        <Typography>
          Nulla vel malesuada mauris. In odio metus, aliquet et scelerisque sed, volutpat in sapien.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Vivamus fermentum feugiat accumsan. Curabitur ut dapibus tellus, nec bibendum nulla. Donec
          malesuada leo sit amet tellus lobortis consequat. Aliquam a dictum massa. Proin posuere ex
          nec commodo elementum. Donec at tempus odio. Vivamus tempor rhoncus mauris, congue porta
          velit suscipit ac. Fusce ante massa, pharetra sit amet ligula vitae, molestie aliquet
          nisl. Maecenas mollis ex nibh, quis facilisis leo tincidunt ac. Cras fringilla metus ac
          urna ornare, id pulvinar arcu faucibus. Suspendisse ultrices id augue at semper. Mauris in
          tempor orci, ut bibendum leo.
        </Typography>
        <Typography>
          Cras sit amet rutrum risus, et aliquet diam. Suspendisse leo tortor, finibus a mi a,
          sollicitudin luctus nisi. Quisque non velit ultrices, accumsan lectus a, tempor libero. Ut
          sed tempus elit, nec commodo nulla. Ut imperdiet lectus est, vel sollicitudin arcu
          tincidunt vel. Duis vel convallis eros. Mauris in ultricies dui, non hendrerit diam. Nulla
          ultricies enim vitae lacus cursus lobortis. Nam non ultrices ex, quis fermentum ipsum. Ut
          ac dictum odio.
        </Typography>
        <Typography>
          Suspendisse ullamcorper maximus enim eu sagittis. Pellentesque non efficitur libero. Nam
          vel auctor odio, sed bibendum urna. Mauris libero turpis, elementum id ligula at, dictum
          placerat arcu. Ut pulvinar fringilla est a semper. Suspendisse potenti. Maecenas sagittis
          tempus neque nec faucibus.
        </Typography>
        <Typography>
          Nullam ut gravida lacus. Donec nec ipsum et nulla faucibus ullamcorper ut a nibh. Nunc
          laoreet et eros quis hendrerit. Donec vulputate mauris eu tincidunt aliquet. Maecenas sed
          varius lorem, nec mattis ipsum. Donec sagittis tempus nulla, nec ultrices risus tristique
          in. Praesent eu congue nisl, dapibus vestibulum arcu.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Essay;
