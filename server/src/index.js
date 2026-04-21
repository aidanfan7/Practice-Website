import express from 'express'
import cors from 'cors'
import { tracks, challenges } from './data.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'HackPrep API is running' })
})

app.get('/api/tracks', (req, res) => {
  res.json(tracks)
})

app.get('/api/tracks/:id', (req, res) => {
  const track = tracks.find(t => t.id === req.params.id)
  if (!track) return res.status(404).json({ error: 'Track not found' })
  res.json(track)
})

app.get('/api/challenges', (req, res) => {
  const { difficulty, track } = req.query
  let result = challenges
  if (difficulty) result = result.filter(c => c.difficulty.toLowerCase() === difficulty.toLowerCase())
  if (track) result = result.filter(c => c.track.toLowerCase().includes(track.toLowerCase()))
  res.json(result)
})

app.get('/api/challenges/:id', (req, res) => {
  const challenge = challenges.find(c => c.id === parseInt(req.params.id))
  if (!challenge) return res.status(404).json({ error: 'Challenge not found' })
  res.json(challenge)
})

app.get('/api/stats', (req, res) => {
  res.json({
    tracks: tracks.length,
    totalLessons: tracks.reduce((acc, t) => acc + t.lessons, 0),
    challenges: challenges.length,
    founders: ['Rohan Sharma', 'Aidan Fan'],
  })
})

app.listen(PORT, () => {
  console.log(`HackPrep API running on http://localhost:${PORT}`)
})
