import {
  Container,
  Badge,
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Divider,
  useColorModeValue,
  Link,
  SimpleGrid,
  Icon,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { motion } from 'framer-motion'

import imgMendwave from '../../public/images/projects/mendwave.png'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const Project = () => {
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const cardBg = useColorModeValue('white', 'gray.800')
  const linkColor = useColorModeValue('teal.600', 'teal.300')

  const cardProps = {
    bg: cardBg,
    borderRadius: 'xl',
    p: 6,
    borderWidth: '1px',
    borderColor: borderColor,
    boxShadow: 'md',
    _hover: {
      boxShadow: 'xl',
      transform: 'translateY(-2px)'
    },
    transition: 'all 0.3s'
  }

  return (
    <Layout title="Mendwave">
      <Container maxW="container.lg">
        <Title>
          Mendwave — AI Speech Editing <Badge colorScheme="teal">2026</Badge>
        </Title>

        <MotionVStack
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          spacing={8}
          align="stretch"
        >
          {/* Diagram */}
          <MotionBox variants={itemVariants}>
            <WorkImage
              src={imgMendwave.src}
              alt="Mendwave pipeline: a waveform with a single highlighted edit region regenerated in the original voice, flanked by bit-identical original audio"
            />
          </MotionBox>

          {/* Project Overview */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Project Overview
              </Heading>
              <VStack spacing={4} align="stretch">
                <P>
                  Mendwave lets someone fix a finished voice recording without re-recording it.
                  The user edits the transcript; the system diffs the new text against the
                  original, locates the changed spans by forced alignment, regenerates only those
                  spans in the original performer&apos;s voice, verifies each candidate against
                  speaker-identity and content-accuracy gates, and splices the result back at
                  low-energy cut points. Everything outside the edit is preserved sample for
                  sample.
                </P>
                <P>
                  The architecture stores <Text as="span" fontWeight="semibold">no voiceprints</Text> —
                  the voice is conditioned in-context from the surrounding audio in the same
                  session. That makes the system usable in legal and contractual settings where
                  voice cloning is prohibited outright, which is the structural difference from
                  clone-based tools that require a pre-trained model of the speaker.
                </P>
                <P>
                  Built end to end and solo: research, model training, inference pipeline,
                  evaluation harness, web product, and billing — shipped to paying customers.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* The Problem */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                The Problem
              </Heading>
              <VStack spacing={4} align="stretch">
                <P>
                  Re-recording a single misspoken word is expensive out of all proportion to the
                  fix. In post-production it means an ADR or pickup session: booking talent,
                  matching the original mic and room, matching energy and pacing. Often it is not
                  just expensive but impossible — the talent is unavailable, the contract forbids
                  synthetic replacement, or the original acoustic conditions can&apos;t be
                  reproduced.
                </P>
                <P>
                  Voice cloning fails for a different reason: it requires storing a persistent
                  voice model, which triggers biometric-data regimes, SAG-AFTRA digital-replica
                  provisions, and studio procurement objections. The wedge is that{' '}
                  <Text as="span" fontStyle="italic">
                    &ldquo;I have a recording with a problem&rdquo;
                  </Text>{' '}
                  is a fundamentally different product from{' '}
                  <Text as="span" fontStyle="italic">
                    &ldquo;I need a voice from scratch&rdquo;
                  </Text>
                  . The second is well served; the first was not.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Pipeline */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                The Edit Pipeline
              </Heading>
              <VStack spacing={4} align="stretch">
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Transcript edit to spliced master
                  </Text>
                  <UnorderedList spacing={2} color={textColor}>
                    <ListItem>
                      <Text fontWeight="medium" as="span">
                        Separation (opt-in):
                      </Text>{' '}
                      BS-RoFormer voice/background separation for mixed audio, with the
                      music-and-effects bed re-laid under the edited voice using crossfade-looped
                      fills — never time-stretched.
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="medium" as="span">
                        Alignment:
                      </Text>{' '}
                      Forced alignment (CrisperWhisper / faster-whisper) produces word-level
                      timestamps, cached by content hash at roughly 60× realtime on a 4090.
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="medium" as="span">
                        Edit operations:
                      </Text>{' '}
                      Word-level diff of original vs. corrected transcript yields edit spans;
                      spans within two gap words are merged, expanded by a context word on each
                      side, and cut points are snapped to local energy minima.
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="medium" as="span">
                        Generation:
                      </Text>{' '}
                      Windowed in-context regeneration over ±10 s of word-snapped context, with
                      best-of-N sampling.
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="medium" as="span">
                        Verification:
                      </Text>{' '}
                      Two hard gates — speaker similarity by equal-length embedding cosine, and
                      margin-aware WER on re-transcription — plus prosody, loudness, and seam
                      diagnostics.
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="medium" as="span">
                        Stitching:
                      </Text>{' '}
                      LUFS normalization, room-tone matching, and equal-power crossfades at the
                      seam boundaries.
                    </ListItem>
                  </UnorderedList>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Two invariants
                  </Text>
                  <UnorderedList spacing={2} color={textColor}>
                    <ListItem>
                      <Text fontWeight="medium" as="span">
                        Edit-region-only.
                      </Text>{' '}
                      The master is sacred. Audio outside the splice is bit-for-bit the original
                      file, and every quality metric scores the edit region alone.
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="medium" as="span">
                        Gate-before-promote.
                      </Text>{' '}
                      Nothing is spliced unless it clears the gates. Borderline candidates route
                      to human review rather than auto-applying; filters triage but never
                      silently reject.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* The Model */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                The Model — MendEdit
              </Heading>
              <VStack spacing={4} align="stretch">
                <P>
                  The first production generation stage used SSR-Speech, an autoregressive
                  neural-codec LM in the VoiceCraft lineage at 16 kHz. It worked on calm read
                  speech and failed structurally on expressive material: with no explicit
                  duration model for the infill region, it regresses to mean speaking rate. That
                  diagnosis triggered the rebuild.
                </P>
                <P>
                  MendEdit is a CosyEdit2-style reproduction on CosyVoice2-0.5B at 24 kHz, built
                  as a staged sequence with hard gates between stages.
                </P>
                <UnorderedList spacing={2} color={textColor}>
                  <ListItem>
                    Synthetic edit-triplet data pipeline over a licensed speech corpus, with
                    expressive-intensity-stratified sampling so 40%+ of training edits fall in
                    high-arousal regions — a deliberate divergence from the source paper, aimed
                    at the exact failure mode.
                  </ListItem>
                  <ListItem>
                    In-context sequence formatting and dataloader with ±0.12 s seam-margin loss
                    masking.
                  </ListItem>
                  <ListItem>
                    Stage-A fine-tune of the Qwen2LM 0.5B backbone, then Stage-B fine-tune of the
                    GOT-CFM conditional flow-matching decoder.
                  </ListItem>
                  <ListItem>
                    Inference integration behind an environment-variable swap, requiring no
                    orchestrator changes, followed by bench evaluation stratified by arousal
                    bucket and scored on the edit region.
                  </ListItem>
                  <ListItem>
                    Optional per-speaker LoRA adapters, shipping only with a consent manifest and
                    a verified cryptographic deletion path — because a LoRA{' '}
                    <Text as="span" fontStyle="italic">
                      is
                    </Text>{' '}
                    a stored voice model.
                  </ListItem>
                </UnorderedList>
                <P>
                  Research arms built and evaluated in parallel: prosody-conditioned generation
                  via an additive zero-init Conv1d projection injecting per-frame F0/energy
                  contours into the flow decoder; non-autoregressive fixed-duration masked infill
                  (PlayDiffusion / F5-TTS family) under a substitution-only word-count
                  constraint; and a signal-domain WORLD/PSOLA prosody transplant as the cheap
                  baseline.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Evaluation Harness */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Evaluation Harness
              </Heading>
              <VStack spacing={4} align="stretch">
                <P>
                  Built before the model work, and the reason the model work was correctly
                  directed. It programmatically injects roughly 100 known edits across held-out
                  material — single-word substitutions, multi-word phrases, full sentences,
                  insertions, deletions — with ground truth known, producing a scorecard broken
                  out by edit type, edit length, and arousal bucket.
                </P>
                <P>
                  Two calibration tests run on every pass: candidates that are deliberately a{' '}
                  <Text as="span" fontStyle="italic">
                    different speaker
                  </Text>
                  , to confirm the speaker gate rejects rather than merely passes, and candidates
                  that say deliberately{' '}
                  <Text as="span" fontStyle="italic">
                    wrong words
                  </Text>
                  , to confirm the content gate rejects. Passing clean candidates proves nothing
                  about a gate; rejecting bad ones does.
                </P>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Findings */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Findings
              </Heading>
              <VStack spacing={3} align="stretch">
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Whole-clip scoring is a lie
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Standard speech-editing benchmarks score quality across the entire clip,
                    averaging the edited region together with untouched original audio and
                    masking bad edits. Re-scoring on the edit region only inverted the model
                    rankings and revealed that the speaker-similarity filter had been silently
                    accepting broken audio. Edit-region-only scoring became a project-wide
                    invariant.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    The speaker-verification metric was measuring nothing
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    On source-separated film audio, ECAPA scored the same real speaker against
                    himself at 0.122 — statistically indistinguishable from two different people
                    (~0.13). WavLM-TDNN scored the same pair at 0.915. Re-scoring every film edit
                    under WavLM put the real synthesis deficit at about 0.05, meaning nearly the
                    entire apparent identity cliff was measurement contamination, not model
                    failure. The scoring standard was frozen: WavLM-TDNN for separated or
                    degraded audio, ECAPA valid only on clean.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Acoustic domain shift, quantified
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Speaker identity held at ~0.94 on clean in-domain speech and collapsed to
                    ~0.43–0.45 on real film/TV dialogue. Root cause: training corpora are
                    anechoic and close-mic&apos;d, while production dialogue carries room
                    acoustics, boom/lav perspective, and a post chain baked into the signal. Fix
                    path built as RIR convolution → microphone impulse responses → randomized
                    EQ/compression, calibrated against measured channel statistics from real film
                    dialogue.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Failure mechanism isolated to a specific number
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Film-context conditioning caused the model to overshoot target duration by
                    ~1.84×, tripping a hard length gate and dropping candidate yield to 49% of
                    the clean-context rate, while game-voice context retained 94%. Naming the
                    mechanism as duration overshoot rather than generic quality degradation made
                    it addressable.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    A feature that looked helpful was catastrophic
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    An augmented-context mode collapsed content fidelity from 79.1% pass@N to
                    3.9%. The bench gave a clean causal split — the feature engaged on 97.4% of
                    candidates, and engaged candidates passed at 1.3% vs. 50% for skipped ones —
                    with dual-ASR agreement confirming it wasn&apos;t a transcription artifact.
                    Default locked off, decision recorded in the experiment ledger.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Gate calibration, empirically
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Of the candidate quality signals, tempo deviation was the strongest failure
                    predictor (AUC 0.783), followed by speaker similarity (0.708); several
                    intuitively appealing signals — background continuity, seam spectral flux —
                    failed the bar and were not promoted. A goodness-of-pronunciation gate
                    cleared spec at 93% catch / 10% false-reject, while a phoneme-error-rate gate
                    managed only 35% catch.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Production quality
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    ~87.5% of edits auto-apply after gating with 0% survived-WER on passing
                    edits; 12.5% route to human review, concentrated in exactly the long-span
                    cases the architecture is known to struggle with. Bench median is 5.2% WER on
                    gated output, with zero edits above 20% WER shipping unflagged.
                  </Text>
                </Box>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* The Product */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                The Product
              </Heading>
              <SimpleGrid columns={[1, 2]} spacing={4}>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Frontend
                  </Text>
                  <UnorderedList spacing={1} fontSize="sm" color={textColor}>
                    <ListItem>React SPA with a project/recording library</ListItem>
                    <ListItem>
                      Block-segmented transcript editor keyed to word-level time ranges
                    </ListItem>
                    <ListItem>Waveform view and before/after A/B playback</ListItem>
                    <ListItem>
                      Per-edit confidence report, accept/reject with reason capture
                    </ListItem>
                  </UnorderedList>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Backend &amp; Billing
                  </Text>
                  <UnorderedList spacing={1} fontSize="sm" color={textColor}>
                    <ListItem>FastAPI on Modal — A10G GPU engine, warm-class scaledown</ListItem>
                    <ListItem>CPU web tier for auth, jobstore, billing, analytics, ETA</ListItem>
                    <ListItem>Supabase Postgres for accounts, credit ledger, event stream</ListItem>
                    <ListItem>Stripe Checkout with webhook-credited balances</ListItem>
                  </UnorderedList>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Consent Layer
                  </Text>
                  <UnorderedList spacing={1} fontSize="sm" color={textColor}>
                    <ListItem>
                      Rights attestation bound to the audio&apos;s SHA-256 content hash — never a
                      speaker embedding
                    </ListItem>
                    <ListItem>
                      Performer magic-link sign-off gating professional use, enforced server-side
                      at submit
                    </ListItem>
                    <ListItem>C2PA-style provenance manifest on output</ListItem>
                  </UnorderedList>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={2}>
                    Data Separation
                  </Text>
                  <UnorderedList spacing={1} fontSize="sm" color={textColor}>
                    <ListItem>
                      Transcript text, edit words, audio, and human verdicts stay in the private
                      results DB
                    </ListItem>
                    <ListItem>
                      Analytics receives only counts, durations, categories, and outcomes
                    </ListItem>
                    <ListItem>
                      A denylist scrubber strips content and PII before anything crosses the
                      boundary
                    </ListItem>
                  </UnorderedList>
                </Box>
              </SimpleGrid>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Legal & Governance */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Legal &amp; Data Governance
              </Heading>
              <UnorderedList spacing={2} color={textColor} fontSize="sm">
                <ListItem>
                  All training data tagged <Text as="span" fontWeight="medium">research_only</Text> vs.{' '}
                  <Text as="span" fontWeight="medium">commercial_ok</Text> at ingestion as a hard
                  boundary — research-only corpora restricted to calibration and evaluation,
                  never to a shippable checkpoint.
                </ListItem>
                <ListItem>
                  Established through case-law research that copyright liability for training
                  data attaches at download, not deployment, and that model taint from infringing
                  data does not wash out through subsequent fine-tuning — retraining from scratch
                  is the only remedy. A proposed &ldquo;train on scraped audio now, swap in
                  licensed data later&rdquo; plan was rejected on those grounds.
                </ListItem>
                <ListItem>
                  Voice and personality rights treated as a separate regime from copyright (ELVIS
                  Act, California AB 2602, NO FAKES Act, SAG-AFTRA agreements).
                </ListItem>
                <ListItem>
                  Consent architecture designed to make only true claims: proof-of-provenance,
                  proof-of-localization, match-evidence, and consent-on-record — explicitly not
                  proof-of-voice, since an attestation can&apos;t verify identity at the acoustic
                  level.
                </ListItem>
              </UnorderedList>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Business */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={4}
              >
                Business
              </Heading>
              <VStack spacing={4} align="stretch">
                <UnorderedList spacing={2} color={textColor} fontSize="sm">
                  <ListItem>
                    Live in production with real payments — Stripe Checkout at $5 per fix, with
                    purchase and refund verified end to end, and the first paying customers
                    acquired.
                  </ListItem>
                  <ListItem>
                    Pricing designed as a discovery instrument: a single flat price open to all
                    segments, so conversion patterns reveal the real beachhead through revealed
                    preference rather than interview claims.
                  </ListItem>
                  <ListItem>
                    18-month bottom-up revenue model with named disconfirming risks, and unit
                    economics with GPU COGS modeled per edit.
                  </ListItem>
                  <ListItem>
                    Submitted to Y Combinator (Fall 2026); recruited a technical co-founder and
                    wrote a full engineering onboarding document covering architecture,
                    infrastructure, working agreements, and access.
                  </ListItem>
                  <ListItem>
                    Market and competitive research across five segments — film/TV post,
                    game localization, dubbing, audiobooks, e-learning — grounded in SAG-AFTRA AI
                    provisions and EU AI Act Article 50 transparency requirements.
                  </ListItem>
                </UnorderedList>
                <Box>
                  <Text fontWeight="semibold" color={headingColor} mb={1}>
                    Strategic evolution
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    The target segment moved with evidence — from audiobook narration, to film/TV
                    ADR, and most recently to automated QC and repair of AI-generated speech at
                    catalog scale — once research established the governing criterion: the
                    product is only worth money where no one can re-record for free. That
                    criterion eliminated human-narrated audiobooks, union dubbing, and voice
                    agents. The pivots were driven by falsification, not fashion.
                  </Text>
                </Box>
              </VStack>
            </Box>
          </MotionBox>

          <Divider borderColor={borderColor} />

          {/* Project Information */}
          <MotionBox variants={itemVariants}>
            <Box {...cardProps}>
              <Heading
                as="h2"
                size="md"
                fontWeight="semibold"
                color={headingColor}
                mb={6}
              >
                Project Information
              </Heading>
              <SimpleGrid columns={[1, 2]} spacing={6}>
                <Box>
                  <Meta>Role</Meta>
                  <Text mt={2} color={textColor}>
                    Founder &amp; ML Engineer
                  </Text>
                </Box>
                <Box>
                  <Meta>Type</Meta>
                  <Text mt={2} color={textColor}>
                    Speech ML Research / Production Product
                  </Text>
                </Box>
                <Box>
                  <Meta>ML &amp; Speech</Meta>
                  <Text mt={2} color={textColor}>
                    CosyVoice2-0.5B, Qwen2LM, conditional flow matching (GOT-CFM), SSR-Speech,
                    F5-TTS, PlayDiffusion, CrisperWhisper / WhisperX forced alignment, BS-RoFormer
                    &amp; HTDemucs separation, pyannote, ECAPA-TDNN / WavLM-TDNN / CAMPPlus,
                    emotion2vec, LoRA/PEFT, WORLD/PSOLA
                  </Text>
                </Box>
                <Box>
                  <Meta>Engineering</Meta>
                  <Text mt={2} color={textColor}>
                    Python, PyTorch, FastAPI, React, TypeScript, SQLite, Postgres, ffmpeg,
                    pedalboard, librosa
                  </Text>
                </Box>
                <Box>
                  <Meta>Infrastructure</Meta>
                  <Text mt={2} color={textColor}>
                    Modal (serverless GPU), RunPod A100-80GB, vast.ai, Vercel, Supabase, Stripe,
                    Docker
                  </Text>
                </Box>
                <Box>
                  <Meta>Practices</Meta>
                  <Text mt={2} color={textColor}>
                    Staged builds with DONE-WHEN gates, experiment ledger with disconfirming
                    evidence, observe-mode gating before enforcement, content/metadata trust
                    boundaries, C2PA provenance
                  </Text>
                </Box>
                <Box gridColumn={[1, 'span 2']}>
                  <Meta>Links</Meta>
                  <HStack mt={2} spacing={4} flexWrap="wrap">
                    <Link
                      href="https://mendwave.io"
                      target="_blank"
                      color={linkColor}
                      _hover={{
                        textDecoration: 'underline',
                        transform: 'translateX(4px)'
                      }}
                      transition="all 0.2s"
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      Live Product — mendwave.io
                      <Icon as={ExternalLinkIcon} />
                    </Link>
                    <Link
                      href="https://github.com/stephenqiao1/speechfix"
                      target="_blank"
                      color={linkColor}
                      _hover={{
                        textDecoration: 'underline',
                        transform: 'translateX(4px)'
                      }}
                      transition="all 0.2s"
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      GitHub Repository
                      <Icon as={ExternalLinkIcon} />
                    </Link>
                  </HStack>
                </Box>
              </SimpleGrid>
            </Box>
          </MotionBox>
        </MotionVStack>
      </Container>
    </Layout>
  )
}

export default Project
export { getServerSideProps } from '../../components/chakra'
