async function handler(job) { const input = job.input || {}; return { ok: true, received: input };
}
module.exports = { handler };
