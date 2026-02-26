const express = require('express');
const app = express();
const port = 3000;
const QRCode = require('qrcode');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.post('/promptpay/qr', (req, res) => {
    let { recipient, amount, merchantName } = req.body
    function formatTLV(id, value) {
        const length = value.length.toString().padStart(2, '0');
        return id + length + value;
    }

    function formatPromptPayQR(recipient, amount, merchantName = 'PromptPay') {
        recipient = recipient.replace(/[^0-9]/g, '');
        if (recipient.length === 10 && recipient.startsWith('0')) {
            recipient = '0066' + recipient.substring(1);
        }
        let payload = '';
        payload += formatTLV('00', '01');
        payload += formatTLV('01', '11');

        let merchantAccount = '';
        merchantAccount += formatTLV('00', 'A000000677010111');
        merchantAccount += formatTLV('01', recipient);
        payload += formatTLV('29', merchantAccount);

        payload += formatTLV('52', '0000');
        payload += formatTLV('53', '764');

        if (amount && parseFloat(amount) > 0) {
            const fixedAmount = parseFloat(amount).toFixed(2);
            payload += formatTLV('54', fixedAmount);
        }

        payload += formatTLV('58', 'TH');

        merchantName = merchantName.replace(/[^A-Za-z0-9 ]/g, '').substring(0, 25);
        payload += formatTLV('59', merchantName || 'PromptPay');

        payload += formatTLV('60', 'Bangkok');
        payload += '6304';
        const crc = crc16(payload);
        return payload + crc.toUpperCase();
    }
    function crc16(s) {
        let crc = 0xFFFF;
        for (let i = 0; i < s.length; i++) {
            crc ^= s.charCodeAt(i) << 8;
            for (let j = 0; j < 8; j++) {
                if ((crc & 0x8000) !== 0) {
                    crc = (crc << 1) ^ 0x1021;
                } else {
                    crc <<= 1;
                }
                crc &= 0xffff;
            }
        }
        return crc.toString(16).padStart(4, '0');
    }
    if (!recipient) {
        return res.status(400).json({ error: 'recipient is required' })
    }
    const payload = formatPromptPayQR(recipient, amount, merchantName);
    QRCode.toDataURL(payload, (err, url) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        return res.json({
            success: true,
            qr: url
        });
    });
})


