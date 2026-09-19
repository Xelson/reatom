import { ChoiceButton, IconButton } from '../design-system'
import {
  bindSlideshowAutoAdvance,
  bindSlideshowPauseOnPageHidden,
  slideshowInterval,
  slideshowPlaying,
  slideshowProgressPercent,
} from '../model'
import { PauseIcon, PlayIcon } from './Icons'

const speedOptions = [
  { ms: 1000, label: '1s' },
  { ms: 3000, label: '3s' },
  { ms: 5000, label: '5s' },
  { ms: 10000, label: '10s' },
  { ms: 30000, label: '30s' },
] as const

type SlideshowProps = {
  class?: string
  onControlPress?: () => void
}

export const Slideshow = ({
  class: className,
  onControlPress,
}: SlideshowProps = {}) => {
  const slideshowActivation = {
    activation: 'press' as const,
    stopPropagation: true,
    onBefore: onControlPress,
    surface: 'viewer' as const,
  }

  return (
    <div
      class={`slideshow-controls ${className ?? ''}`}
      ref={() => {
        const stopAdvance = bindSlideshowAutoAdvance()
        const stopVisibility = bindSlideshowPauseOnPageHidden()

        return () => {
          stopAdvance()
          stopVisibility()
        }
      }}
      css={`
        position: absolute;
        bottom: 52px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 14px;
        background: var(--image-overlay);
        border: var(--border-width) var(--control-border-style)
          rgba(255, 255, 255, 0.12);
        border-radius: var(--radius-round);
        z-index: 1020;
        backdrop-filter: var(--panel-backdrop-filter);
        box-shadow: var(--glow);
      `}
    >
      <IconButton
        {...slideshowActivation}
        label={() =>
          slideshowPlaying() ? 'Pause slideshow' : 'Play slideshow'
        }
        selected={slideshowPlaying}
        onClick={slideshowPlaying.toggle}
        css="width: 32px; height: 32px;"
      >
        {() => (slideshowPlaying() ? <PauseIcon /> : <PlayIcon />)}
      </IconButton>

      {speedOptions.map(({ ms, label }) => (
        <ChoiceButton
          {...slideshowActivation}
          label={() => `Slideshow speed ${label}`}
          selected={() => slideshowInterval() === ms}
          onClick={() => slideshowInterval.set(ms)}
        >
          {label}
        </ChoiceButton>
      ))}

      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={slideshowProgressPercent}
        aria-label="Slideshow progress"
        css={`
          width: 80px;
          height: 4px;
          background: var(--overlay-control);
          border-radius: var(--radius-round);
          overflow: hidden;
          margin-left: 4px;
        `}
      >
        <div
          style:width={() => `${slideshowProgressPercent()}%`}
          css={`
            height: 100%;
            background: var(--accent);
            border-radius: var(--radius-round);
            transition: width 0.05s linear;
          `}
        />
      </div>
    </div>
  )
}
