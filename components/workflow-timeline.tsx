"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import type { WorkflowStep } from "@/lib/site-content";

import styles from "./workflow-timeline.module.css";

type WorkflowTimelineProps = {
  steps: WorkflowStep[];
};

export function WorkflowTimeline({ steps }: WorkflowTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: "-12% 0px -45% 0px",
        threshold: 0.45,
      },
    );

    stepRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, [steps.length]);

  const activeStep = steps[activeIndex];
  const progress = useMemo(() => {
    if (steps.length <= 1) {
      return "0%";
    }

    return `${(activeIndex / (steps.length - 1)) * 100}%`;
  }, [activeIndex, steps.length]);

  return (
    <div className={styles.shell}>
      <div
        className={styles.list}
        style={{ "--timeline-progress": progress } as CSSProperties}
      >
        {steps.map((step, index) => (
          <article
            className={`${styles.step} ${index === activeIndex ? styles.stepActive : ""}`}
            data-index={index}
            key={step.id}
            ref={(node) => {
              stepRefs.current[index] = node;
            }}
          >
            <button
              className={styles.stepButton}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <span className={styles.stepNumber}>{step.number}</span>
              <div className={styles.stepCopy}>
                <p className={styles.stepCaption}>{step.caption}</p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </button>
          </article>
        ))}
      </div>

      <aside className={styles.visualRail}>
        <div className={styles.visualCard}>
          <div className={styles.visualMeta}>
            <p className={styles.visualEyebrow}>Current step</p>
            <h3>{activeStep.title}</h3>
            <p>{activeStep.caption}</p>
          </div>
          <div className={styles.visualFrame}>
            <Image
              alt={activeStep.title}
              className={styles.visualImage}
              sizes="(max-width: 980px) 100vw, 46vw"
              src={activeStep.image}
            />
          </div>
        </div>
      </aside>
    </div>
  );
}
