import {
  WorkItemDescription,
  WorkItemHolder,
  WorkItemTitle,
  WorkVideoHolder,
  ItemDescriptionHolder,
} from '@/styles/WorkStyles';

//Work Item interface
export interface WorkItem {
  title: string;
  description: string;
  href: string;
}

export default function WorkItem(props: WorkItem) {
  return (
    <div>
      <WorkItemHolder>
        <WorkVideoHolder>
          <iframe
            src={props.href}
            title='YouTube video player'
            style={{
              width: '100%',

              aspectRatio: '16/9',
            }}
          ></iframe>
        </WorkVideoHolder>
        <ItemDescriptionHolder>
          <WorkItemTitle>{props.title}</WorkItemTitle>
          <WorkItemDescription>{props.description}</WorkItemDescription>
        </ItemDescriptionHolder>
      </WorkItemHolder>
    </div>
  );
}
