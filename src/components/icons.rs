use core::fmt;

use yew::prelude::*;
use yew_icons::{Icon, IconId};

#[derive(PartialEq)]
#[allow(dead_code)]
pub enum IconAlignment {
    Start,
    Center,
    End,
}

impl fmt::Display for IconAlignment {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match *self {
            IconAlignment::Start => write!(f, "start"),
            IconAlignment::Center => write!(f, "center"),
            IconAlignment::End => write!(f, "end"),
        }
    }
}

#[derive(PartialEq, Properties)]
pub struct IconsProps {
    pub alignment: IconAlignment,
}

#[function_component(Icons)]
pub fn icons(props: &IconsProps) -> Html {
    let IconsProps { alignment } = props;

    html! {
      <div
        class={classes!("icons", format!("icons-{}", alignment))}
      >
        <a href="https://twitter.com/harry_z_kang" target="_blank" rel="noreferrer">
          <Icon icon_id={IconId::SimpleIconsTwitter} width={"2em".to_owned()} height={"2em".to_owned()} />
        </a>
        <a href="https://www.facebook.com/harryzkang" target="_blank" rel="noreferrer">
          <Icon icon_id={IconId::SimpleIconsFacebook} width={"2em".to_owned()} height={"2em".to_owned()} />
        </a>
        <a href="https://www.linkedin.com/in/zixuan-kang-090220171/" target="_blank" rel="noreferrer">
          <Icon icon_id={IconId::SimpleIconsLinkedin} width={"2em".to_owned()} height={"2em".to_owned()} />
        </a>
        <a href="https://github.com/harry-z-kang?tab=repositories" target="_blank" rel="noreferrer">
          <Icon icon_id={IconId::SimpleIconsGithub} width={"2em".to_owned()} height={"2em".to_owned()} />
        </a>
        <a href="https://1drv.ms/b/s!AltiROOwfMyzneguKUdaXBHB1tC2AQ?e=QJt4hD" target="_blank" rel="noreferrer">
          <Icon icon_id={IconId::BootstrapFileEarmarkPdf} width={"2em".to_owned()} height={"2em".to_owned()} />
        </a>
      </div>
    }
}
