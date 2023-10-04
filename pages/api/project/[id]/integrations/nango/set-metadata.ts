import type { NextApiRequest, NextApiResponse } from 'next';

import { getNangoServerInstance } from '@/lib/integrations/nango';
import { withProjectAccess } from '@/lib/middleware/common';

type Data = {
  status?: string;
  error?: string;
};

const allowedMethods = ['POST'];

const nango = getNangoServerInstance();

export default withProjectAccess(
  allowedMethods,
  async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.method === 'POST') {
      if (!req.body.integrationId) {
        return res.status(400).json({ error: 'No integration id provided.' });
      } else if (!req.body.connectionId) {
        return res.status(400).json({ error: 'No connection id provided.' });
      } else if (!req.body.metadata) {
        return res.status(400).json({ error: 'No metadata provided.' });
      }

      try {
        await nango.setMetadata(
          req.body.integrationId,
          req.body.connectionId,
          req.body.metadata,
        );

        return res.status(200).json({});
      } catch {
        // Do nothing
      }
    }

    return res.status(400).end();
  },
);