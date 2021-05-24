const { RtcTokenBuilder, RtcRole } = require('agora-access-token')

const appId = process.env.appId
const appCertificate = process.env.appCertificate
const channelName = process.env.channelName
const uid = process.env.uid
const account = process.env.uid
const role = RtcRole.PUBLISHER

const expirationTimeInSeconds = 3600

const currentTimestamp = Math.floor(Date.now() / 1000)

const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

// Build token with uid
const tokenA = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpiredTs);
console.log("Token With Integer Number Uid: " + tokenA);

// Build token with user account
const tokenB = RtcTokenBuilder.buildTokenWithAccount(appId, appCertificate, channelName, account, role, privilegeExpiredTs);
console.log("Token With UserAccount: " + tokenB);