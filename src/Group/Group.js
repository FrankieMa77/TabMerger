/* 
TabMerger as the name implies merges your tabs into one location to save
memory usage and increase your productivity.

Copyright (C) 2021  Lior Bragilevsky

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

If you have any questions, comments, or concerns you can contact the
TabMerger team at <https://tabmerger.herokuapp.com/contact/>
*/

import React, { useEffect, useState, useRef, useCallback } from "react";

import * as GroupFunc from "./Group_functions";
import { translate } from "../App/App_functions";

// prettier-ignore
import {  AiOutlineMinus,  AiOutlineClose,  AiOutlineReload,} from "react-icons/ai";
import { VscChromeRestore } from "react-icons/vsc";
import { BiColorFill, BiArrowToRight } from "react-icons/bi";
import { MdVerticalAlignCenter } from "react-icons/md";

import Button from "../Button/Button.js";

import "./Group.css";
import "../Button/Button.css";

export default function Group(props) {
  const TITLE_TRIM_LIMIT = useRef(15);
  const [hide, setHide] = useState(false);

  const setGroupBackground = useCallback(
    (e) => {
      GroupFunc.setBGHelper(e, props.id);
    },
    [props.id]
  );

  useEffect(() => {
    var group = document.getElementById(props.id);
    setGroupBackground(group);
  }, [props.id, setGroupBackground]);

  return (
    <div className={"group-item " + ("group-0" === props.id ? "mt-0" : "mt-3")}>
      <div className="group-title d-flex flex-row justify-content-center">
        <h5 className="tabTotal-inGroup">
          {props.num_tabs + (props.num_tabs !== 1 ? " Tabs" : " Tab")}
        </h5>

        <p
          className="title-edit-input font-weight-bold p-1 mb-0"
          contentEditable
          onFocus={(e) => GroupFunc.selectTitle(e)}
          onBlur={(e) => GroupFunc.setTitle(e, props.setGroups)}
          onKeyDown={(e) =>
            GroupFunc.monitorTitleLength(e, TITLE_TRIM_LIMIT.current)
          }
        >
          <span>{props.title}</span>
          <span className="reload-title">
            <AiOutlineReload
              size="1.2rem"
              onClick={(e) => GroupFunc.reloadTitle(e, props.title)}
            />
          </span>
        </p>

        <div className="title-btn-containter row">
          <div>
            <div className="tip p-0">
              <BiColorFill
                className="input-color"
                onClick={(e) => e.target.closest("div").nextSibling.click()}
              />
              <span className="tiptext-group-color">
                {translate("pickColor")}
              </span>
            </div>
            <input
              type="color"
              defaultValue={props.color}
              onChange={(e) => setGroupBackground(e)}
            />
          </div>

          <Button
            classes="show-hide-btn btn-in-group-title"
            translate={hide ? translate("showTabs") : translate("hideTabs")}
            tooltip={"tiptext-group-title"}
            onClick={(e) => GroupFunc.toggleGroup(e, hide, setHide)}
          >
            <AiOutlineMinus />
          </Button>
          <Button
            classes="open-group-btn btn-in-group-title"
            translate={translate("openGroup")}
            tooltip={"tiptext-group-title"}
            onClick={(e) => GroupFunc.openGroup(e)}
          >
            <VscChromeRestore />
          </Button>

          <Button
            classes="delete-group-btn btn-in-group-title"
            translate={translate("deleteGroup")}
            tooltip={"tiptext-group-title"}
            onClick={(e) =>
              GroupFunc.deleteGroup(
                e,
                props.getTimestamp(),
                props.setTabTotal,
                props.setGroups
              )
            }
          >
            <AiOutlineClose />
          </Button>
        </div>
      </div>

      <div
        id={props.id}
        className={props.className}
        onDragOver={GroupFunc.dragOver}
      >
        <div className="created mr-1">
          <b>{translate("created")}:</b> <span>{props.created}</span>
        </div>
        <div className="merging-container float-right">
          <div className="d-flex flex-column">
            <Button
              classes="merge-btn btn-for-merging btn-outline-dark"
              translate={translate("mergeALLtabs")}
              tooltip={"tiptext-group-merge"}
              onClick={() =>
                GroupFunc.sendMessage({ msg: "all", id: props.id })
              }
            >
              <MdVerticalAlignCenter color="black" size="1.3rem" />
            </Button>
            <Button
              classes="merge-left-btn btn-for-merging btn-outline-dark"
              translate={translate("mergeLEFTtabs")}
              tooltip={"tiptext-group-merge"}
              onClick={() =>
                GroupFunc.sendMessage({ msg: "left", id: props.id })
              }
            >
              <BiArrowToRight color="black" size="1.3rem" />
            </Button>
            <Button
              classes="merge-right-btn btn-for-merging btn-outline-dark"
              translate={translate("mergeRIGHTtabs")}
              tooltip={"tiptext-group-merge"}
              onClick={() =>
                GroupFunc.sendMessage({ msg: "right", id: props.id })
              }
            >
              <BiArrowToRight color="black" size="1.3rem" />
            </Button>
          </div>
        </div>

        {props.children}
      </div>
    </div>
  );
}
